import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../users/login/login.component';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FlipkartJsonService } from '../services/flipkart-json.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType:string='default';
  itemsType:string='Idefault';
  userName:string='';
  cardItemNumber!:number;
  data:any

  filterstring:string="";

  constructor(public dialog: MatDialog, private router:Router,private cartServices:CartService,private flipkart:FlipkartJsonService,private fb:FormBuilder) {}
  
  ngOnInit(): void {
    
    this.router.events.subscribe((item:any)=>{
      this.flipkart.getData().subscribe(a=>{
        this.data=a
        console.log('search',this.data);
        
      })

      if(item.url){
        // console.log(item);
        console.log(item.url);
        if(localStorage.getItem('user')){
          // console.log('hi');
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName=userData.name;
          this.menuType='user';

          if(userStore){
          let UserId = userStore && JSON.parse(userStore).id;

            this.cartServices.getUserId(UserId)

            // this.flipkart.getData().subscribe(a=>{
            //   this.data=a
            //   console.log('search',this.data);
              
            // })
            
          }
          // setTimeout(() => {
          //   // let user=localStorage.getItem('user');
          //   // let userId = user && JSON.parse(user).id;
          //   this.cartServices.addtoCartUserReturn().subscribe(a=>{
          //     this.cardItemNumber=a.length
          //   })
           
          // }, 1000);

          this.cartServices.cartDatas.subscribe(items=>{
  
            if(items.length==0 ){
              this.cardItemNumber=0
            }else{
              this.cardItemNumber=items.length
              
            console.log('number');
            
            console.log(items);
            console.log(this.cardItemNumber);
            
            }
      
            
            
          })
          // this.cardItemNumber=this.cartServices.returnData().length
          
        }else if(!localStorage.getItem('user')){
          this.menuType='default';


          let cartData = localStorage.getItem('localCart')
          if(cartData){
          // alert('hi')
            this.cardItemNumber=JSON.parse(cartData).length;
            
            
          }else{
            this.cardItemNumber= 0
          }
        
          this.cartServices.cartDatas.subscribe(items=>{
    
          if(items.length==0 ){
            this.cardItemNumber=1
          }else{
            this.cardItemNumber=items.length
          console.log('number');
          
          console.log(items);
          }
    
          
          
          })
        }
        
        
      }
      // console.log(this.userName);

    })
    
    // if(localStorage.getItem('localCart')){
    //   let cartData = localStorage.getItem('localCart')
    //   if(cartData){
    //   // alert('hi')
    //   this.cardItemNumber=JSON.parse(cartData).length;
    //   }
    
    //   this.cartServices.cartDatas.subscribe(items=>{

    //   if(items.length==0 ){
    //     this.cardItemNumber=0
    //   }else{
    //     this.cardItemNumber=items.length
    //   console.log('number');
      
    //   console.log(items);
    //   }

      
      
    //   })
    // }else{
    //   let cartData=localStorage.getItem('user')
    //   if(cartData){
    //     // alert('hi')
    //     this.cartServices.addtoCartUserReturn().subscribe(items=>{
    //       this.cardItemNumber=items.length
    //     })
    //   }
      
    //   this.cartServices.cartDatas.subscribe(items=>{
  
    //     if(items.length==0 ){
    //       this.cardItemNumber=0
    //     }else{
    //       this.cardItemNumber=items.length
    //     console.log('number');
        
    //     console.log(items);
    //     console.log(this.cardItemNumber);
        
    //     }
  
        
        
    //   })
    // }

    
    
  }

  form=this.fb.group({
    name:this.fb.control('')
  })

  search(){
    let a:any = this.form.value.name
    console.log(a);
    this.filterstring=a;
   
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginComponent, {
      width: '840px',
      height: '520px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onclickCart(){
    this.router.events.subscribe((item:any)=>{
      if(item.url){
        console.log('go to cart');
        console.log(item.url);
        
      }
    })
    this.itemsType='localCart'
  }
  homePage(){
    this.itemsType='Idefault'
  }

  applyFilter(event: Event) {

    console.log(event);
    

    // let user=localStorage.getItem('user');
    //   let UserId = user && JSON.parse(user).id;
    //   this.cartServices.getUserId(UserId);
    //   this.cartServices.cartDatas.subscribe(items=>{
    //     this.data=items
    //   })

    // const filterValue = (event.target as HTMLInputElement).value;
    // this.data.filter = filterValue.trim().toLowerCase();
    // console.log(this.data.filter);
    
  }
  getId(data:any){
    console.log(data);
    this.flipkart.postSearch(data).subscribe(item=>{
      console.log('search',item);
      
    })
    this.router.navigate(['/users/search'])

  }
}
