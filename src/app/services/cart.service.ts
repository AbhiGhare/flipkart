import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartDatas = new EventEmitter<any[] | []>();

data:any[]=[];

// jsonData:any[]=[];

url='http://localhost:3000/cart';


  constructor(private http:HttpClient) { }

  LocalStorageData(data:any){
    // this.data=data;
    let cartData=[];
    let localCart=localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem("localCart",JSON.stringify([data]));
    }
    else{
      console.log('services else');
      cartData=JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem("localCart", JSON.stringify(cartData));
      console.log(cartData);
      // return cartData
    }
    // this.data[]=cartData[]
    this.cartDatas.emit(cartData)
  }

  addtoCartUser(a:any):Observable<any>{
    // console.log(a);
    // this.cartDatas.emit(a)
    
    return this.http.post<any>(this.url,a)
    
  }
  getUserId(id:number){
    return this.http.get<any[]>(this.url+'?UserId='+id,{observe:'response'}).subscribe((res)=>{
      console.log(res.body);
      // this.jsonData=res.body
      if(res && res.body){
        this.cartDatas.emit(res.body);
        this.getdata(res.body)
      }
    })
  }
  // addtoCartUserReturn():Observable<any>{
  //   // return this.jsonData
  //   return this.http.get<any>(this.url);
  // }


  removeCartLocalStorage(productOneId:number){
    let cartData = localStorage.getItem('localCart');
    if(cartData){
      let item:any[] = JSON.parse(cartData);
      item=item.filter((item:any)=>productOneId!==item.id);
      console.log(item);
      console.log(item.length);
      if(item.length==0){
        localStorage.removeItem('localCart')
      }
      
      this.getdata(item)

      
      localStorage.setItem('localCart',JSON.stringify(item));
      this.cartDatas.emit(item)
      this.returnData()
    }
  }

  removeItemJson(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'/'+id)
  }

  getdata(item:any[]){
   this.data=item;
   console.log(this.data);
   
  }
  returnData(){
   console.log(this.data);

    return this.data
  }

  updateQuntityData(data:any):Observable<any>{
    return this.http.put<any>(this.url+'/'+data.id,data)
  }
}
