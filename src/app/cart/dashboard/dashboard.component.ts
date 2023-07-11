import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  menuType:string='';
  cardItemNumber:number=0;
  data:any;
  totalPrice:any={
    price:0,
    discount:0,
    deliveryCharges:0,
    totalAmount:0,
    quantity:1
  }

  constructor(private router:Router,private cartServices:CartService){}

  ngOnInit(): void {
    this.router.events.subscribe(item=>{
      if(localStorage.getItem('user')){

        this.menuType='json'
        let user=localStorage.getItem('user');
        let UserId = user && JSON.parse(user).id;
        // this.cartServices.addtoCartUserReturn().subscribe(item=>{
        //   this.cardItemNumber=item.length;
        //   console.log(this.cardItemNumber);
        //   this.data=item
        //   console.log(this.data); 
        //   if(item.length==0){
        //     this.menuType='default'
        //   }
        // })
  
        this.cartServices.getUserId(UserId)
  
        this.cartServices.cartDatas.subscribe(items=>{
    
          if(items.length==0 ){
            this.cardItemNumber=0
          }else{
            this.cardItemNumber=items.length
            console.log('number');
          
            console.log(items);
            console.log(this.cardItemNumber);
            this.data=items;
  
            let prices=0
            this.data.forEach((item:any)=>{
              // if(item.quantity>=0){
              //   let 
              // }
            prices=prices + (item.price*item.quantity)
          })
          console.log(prices);
          this.totalPrice.price=prices;
          this.totalPrice.discount=prices/10;
          if(prices<100){
            this.totalPrice.deliveryCharges=0;
          }else{
            this.totalPrice.deliveryCharges=100;
          }
          // this.totalPrice.deliveryCharges=0;
          
          this.totalPrice.totalAmount=(this.totalPrice.price-this.totalPrice.discount+this.totalPrice.deliveryCharges)
          console.log(this.totalPrice);
          
          }
    
          
          
        })
  
        // setTimeout(() => {
        //   let a =this.cartServices.addtoCartUserReturn();
        // this.data =a
          
        // }, 1000);
        // console.log(this.data);
        
        // this.cardItemNumber=this.data.length;
        // console.log(this.cardItemNumber);
  
        // if(this.data.length==0){
        //   this.menuType='default';
        // }
  
      }else if(localStorage.getItem('localCart')){
  
        this.menuType='localCart'
        let cartData = localStorage.getItem('localCart')
        if(cartData){
          this.cardItemNumber=JSON.parse(cartData).length;
          // console.log(JSON.parse(cartData));
          
          this.data=JSON.parse(cartData);
          console.log(this.data[0].price);
          let prices=0
          this.data.forEach((item:any)=>{
            prices=prices + item.price
          })
          console.log(prices);
          this.totalPrice.price=prices;
          this.totalPrice.discount=prices/10;
          if(prices<100){
            this.totalPrice.deliveryCharges=0;
          }else{
            this.totalPrice.deliveryCharges=5;
          }
          this.totalPrice.totalAmount=(this.totalPrice.price-this.totalPrice.discount+this.totalPrice.deliveryCharges)
          console.log(this.totalPrice);
          
          // if(this.cardItemNumber>=0){
          //  for(let i =1;i<=this.cardItemNumber;i++){
          //   let a = this.data[i].price
          //   console.log(a);
            
          //  }
            
          // }
          
        }
        // console.log(this.cardItemNumber);
        this.cartServices.cartDatas.subscribe(item=>{
        this.cardItemNumber=item.length
          console.log(item); 
          if(item.length==0){
            this.menuType='default'
          }
        
          this.data=item
          console.log(this.data[0].price);
          let prices=0
          this.data.forEach((item:any)=>{
            prices=prices + item.price
          })
          console.log(prices);
          this.totalPrice.price=prices;
          this.totalPrice.discount=prices/10;
          if(prices<500){
            this.totalPrice.deliveryCharges=0;
          }else{
            this.totalPrice.deliveryCharges=100;
          }
          // this.totalPrice.deliveryCharges=0;
          
          this.totalPrice.totalAmount=(this.totalPrice.price-this.totalPrice.discount+this.totalPrice.deliveryCharges)
          console.log(this.totalPrice);
        });
  
        if(this.cardItemNumber==0 ){
          this.menuType='default'
        }else{
          this.menuType='localCart'
          // this.data=JSON.parse(cartData)
          console.log(this.data);
          this.cartServices.getdata(this.data)
          // console.log(this.cartServices.getdata());
        }
      }else{
        this.menuType="default"
      }
    })
    
    // console.log('cart enter');
    // this.router.events.subscribe((item:any)=>{
    //   console.log(item.url);
    //   console.log(item);
      
    //   if(item.url){
    //     if(localStorage.getItem('localCart')){
    //       let localCart = localStorage.getItem('localCart');
    //       let localCartData = localCart && JSON.parse(localCart);
    //       // console.log("localCart",localCart);
    //       // console.log(localCartData);
    //       this.menuType='localCart'
          
    //     }else{
    //       this.menuType='default';
    //     }
    //   }
    // })
    // let cartData = localStorage.getItem('localCart')

    // if(cartData){
    //   // let cartData = localStorage.getItem('localCart')
    // if(cartData){
    //   this.cardItemNumber=JSON.parse(cartData).length
    //   this.data=JSON.parse(cartData)
    // }
    // console.log(this.cardItemNumber);
    // this.cartServices.cartDatas.subscribe(item=>{
    //   this.cardItemNumber=item.length
    //   // console.log(item);

      
    //   if(item.length==0){
    //     this.menuType='default'
    //   }
    // })
    // if(this.cardItemNumber==0 ){
    //   this.menuType='default'
    // }else{
    //   this.menuType='localCart'
    //   // this.data=JSON.parse(cartData)
    //   console.log(this.data);
    //   this.cartServices.getdata(this.data)
    //   // console.log(this.cartServices.getdata());
      
    // }
    // }else if(localStorage.getItem('user')){
    //   // this.menuType='json'

    //   // this.cartServices.addtoCartUserReturn().subscribe(item=>{
    //   //   this.cardItemNumber=item.length;
    //   //   console.log(this.cardItemNumber);
    //   //   this.data=item
    //   //   console.log(this.data);
        
    //   // })
    // }
    
  }
}
