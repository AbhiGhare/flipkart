import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  showForm:boolean=true;
  showOtp:boolean=false

  otpData!:any;

  constructor(private fb:FormBuilder, private router:Router, private service : UserService,private cartService:CartService){}

  // user signup
  signUp=this.fb.group({
    name:this.fb.control(''),
    mobile:this.fb.control('')
  })

  userSignUpData(){
    // console.log("user data", this.signUp.value);
    this.showForm=false;
    this.showOtp=true;
    this.otpData = Math.floor(1000 + Math.random() * 9000);
    alert(this.otpData)
    console.log(this.otpData);

  }

  // otp
  otp=this.fb.group({
    otp:this.fb.control('')
  })

  OtpGenerate(){
    console.log(this.otp.value);
    
    if(this.otp.value.otp===this.otpData){
    console.log("user data before otp", this.signUp.value);
    this.service.signUP(this.signUp.value).subscribe(item=>{
      console.log(item);
      if(item){
        localStorage.setItem('user',JSON.stringify(item))
        this.router.navigate(['/home'])
      }

      setTimeout(()=>{
        if(localStorage.getItem('user')){
          this.loacalCartToJsonData()
      
          }
      },500)
      
    })

    
    
    }
    else{
      alert("Invalid OTP")
      this.showForm=true;
      this.showOtp=false
    }

  }

  ngOnInit(): void {
    this.service.userAuthReload()
  }

  loacalCartToJsonData(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
      let UserId = user && JSON.parse(user).id;
    if(data){
      // let user = localStorage.getItem('user');
      // let UserId = user && JSON.parse(user).id;

      let cartDataList:any[] = JSON.parse(data);

      cartDataList.forEach((product:any,index)=>{
        let cartData:any={
          ...product,
          quantity:1,
          productId:product.id,
          UserId,

        };
        delete cartData.id;
        setTimeout(()=>{
          this.cartService.addtoCartUser(cartData).subscribe(items=>{
            
            if(items){
              console.log('local to db',items);
              // this.router.navigate(['/home'])
            }

            console.log(items.UserId);
            // this.cartService.getUserId(items.UserId)
            
            
          })
          
          if(cartDataList.length===index+1){
            localStorage.removeItem('localCart')
          }
          
        },500)
      })
    }
   
    setTimeout(() => {
      this.cartService.getUserId(UserId)
    }, 500);
  }
}
