import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddComponent } from 'src/app/notifications/add/add.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent  implements OnInit{

  menuType:string='';
  data:any[]=[]
  constructor(private cartServices:CartService,private router : Router,private _snackBar: MatSnackBar ){}

  ngOnInit(): void {
    
   if(localStorage.getItem('localCart')){
    this.data= this.cartServices.returnData()
    console.log(this.cartServices.returnData());
     if(this.data.length==0){
      // console.log('ggggggggggg');
      this.menuType='default'
     }else{
      // console.log('hiiiiiiiiiiiii');
      this.menuType='localCart'
     }
   }else if(localStorage.getItem('user')){
    this.menuType='json'
    let user=localStorage.getItem('user');
    let UserId = user && JSON.parse(user).id;
    // this.cartServices.addtoCartUserReturn().subscribe(item=>{
    //   this.data=item
    // })
    this.cartServices.getUserId(UserId);
    this.cartServices.cartDatas.subscribe(items=>{
      this.data=items;
      if(this.data.length==0){
        // console.log('ggggggggggg');
        this.menuType='default'
       }else{
        // console.log('hiiiiiiiiiiiii');
        this.menuType='json';
        this.data=items;

       }
    })
    
    // this.data=this.cartServices.addtoCartUserReturn()
   
   }else{
    this.menuType='default';
    console.log('default');
    
    // this.data=this.cartServices.addtoCartUserReturn()
    // console.log(this.data);
    
   }
  }

  removeCart(dataId:any){
    console.log("remove on data",dataId);
    this._snackBar.openFromComponent(AddComponent,{
      data:{message:dataId},
      duration:2000,
    })
    
    if(localStorage.getItem('localCart')){
        console.log('remove',dataId);
        this.cartServices.removeCartLocalStorage(dataId.id)
        // alert('remove')
        this.data= this.cartServices.returnData()
    }else if(localStorage.getItem('user')){
      console.log('delete',dataId);

      this.cartServices.removeItemJson(dataId.id).subscribe(item=>{
        console.log('delete',item);
        
      });
      let user=localStorage.getItem('user');
      let UserId = user && JSON.parse(user).id;
      this.cartServices.getUserId(UserId);
      this.cartServices.cartDatas.subscribe(items=>{
        this.data=items
      })
    }
  }

  plus(data:any){

    if(localStorage.getItem('user')){

      console.log('plus',data);
      let Q = data.quantity;
      console.log(Q);
      if(data.quantity!==0){
        ++Q ;
      }else{
        ++Q
      }
      console.log(Q);
      data.quantity=Q
      console.log(data.quantity);
      console.log(data);
      
      
      this.cartServices.updateQuntityData(data).subscribe(item=>{
        console.log(item);
        
      })
      let user=localStorage.getItem('user');
      let UserId = user && JSON.parse(user).id;
      this.cartServices.getUserId(UserId);
      this.cartServices.cartDatas.subscribe(item=>{
        this.data=item
  
        console.log(this.data);
        
      })
      // this.router.navigate(['/cart'])
    }else{
      alert('plz log in')
    }
    

  }

  minus(data:any){

    if(localStorage.getItem('user')){

      console.log('plus',data);
      let Q = data.quantity;
      console.log(Q);
      if(data.quantity!==0){
        --Q ;
      }
      console.log(Q);
      data.quantity=Q
      console.log(data.quantity);
      console.log(data);
      
      
      this.cartServices.updateQuntityData(data).subscribe(item=>{
        console.log(item);
      })
      let user=localStorage.getItem('user');
      let UserId = user && JSON.parse(user).id;
      this.cartServices.getUserId(UserId);
      this.cartServices.cartDatas.subscribe(item=>{
        this.data=item
  
        console.log(this.data);
        
      })
    }else{
      alert('plz log in')
    }
    

  }
}
