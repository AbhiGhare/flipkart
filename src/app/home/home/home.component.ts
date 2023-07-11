import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddComponent } from 'src/app/notifications/add/add.component';
import { CartService } from 'src/app/services/cart.service';
import { FlipkartJsonService } from 'src/app/services/flipkart-json.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private services:FlipkartJsonService,private cartServices:CartService,private _snackBar: MatSnackBar ){}

  data:any[]=[];
  data1:any[]=[];
  data2:any[]=[];
  data3:any[]=[];
  data4:any[]=[];
  data5:any[]=[];

  ngOnInit(): void {
    this.services.displayProduct().subscribe(item=>{
      console.log("product", item);
      // this.services.getData(item).subscribe(a=>{
      //   console.log('a',a);
        
      // })
      // console.log(item[5]);
      // if(item[5]>=item[5]){
      //   console.log(item);
        
      // }
      this.data=[item[0],item[1],item[2]],
      this.data1=[item[3],item[4],item[5]],
      this.data2=[item[6],item[7],item[8],item[9]],
      this.data3=[item[10],item[11],item[12],item[13]],
      this.data4=[item[14],item[15],item[16],item[17]],
      this.data5=[item[18],item[19],item[0],item[1]],

      console.log(this.data);
      
      // for(let i=0 ;i<=5;i++ ){
      //   console.log(item[i]);
      //   this.data +=item[i]
      //   console.log(this.data.values);
        
      // }
      
      
      //this.products = item;
    })
  }

  onclick(a:any){
    console.log(a);
    
  }

  addtoCart(data:any){

    this._snackBar.openFromComponent(AddComponent,{
      data:{message:data},
      duration:2000,
    })

    if(!localStorage.getItem('user')){
    console.log(data);
    this.cartServices.LocalStorageData(data);

    
    }
    else{
      console.log('else');
      let user=localStorage.getItem('user');
      let UserId = user && JSON.parse(user).id;
      console.log(UserId);
      let cardData={
        ...data,
        quantity:1,
        productId:data.id,
        UserId
      }
      delete cardData.id
      console.log(cardData);
      console.log(cardData.id);
      this.cartServices.addtoCartUser(cardData).subscribe(item=>{
        console.log(item);
        console.log(item.UserId);
        if(item){
          this.cartServices.getUserId(UserId)
        }
        // this.cartServices.addtoCartUserReturn().subscribe(d=>{
        //   this.cartServices.cartDatas.emit(d)
        // })
        // this.cartServices.cartDatas.emit(this.cartServices.addtoCartUserReturn())
        
        // alert('data is added user id')
      })
      
    }
    
  }
}
