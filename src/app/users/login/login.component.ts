import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { SnackBarOtpComponent } from 'src/app/snack-bar-otp/snack-bar-otp.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLogin:boolean=true;
  showOtp:boolean=false
 otpData!:any;
  constructor(private fb:FormBuilder,private service:UserService,private router:Router,private _snackBar: MatSnackBar , private cartService:CartService){}

  userLogin=this.fb.group({
    mobile:this.fb.control('')
  })

  otpg=this.fb.group({
    otp:this.fb.control('')
  })

  ngOnInit(): void {
    this.service.userAuthReload()
  }


  login(){
    this.showLogin=false;
    this.showOtp=true
    this.otpData = Math.floor(1000 + Math.random() * 9000);
    this._snackBar.openFromComponent(SnackBarOtpComponent,{
      data:{message:this.otpData},
      duration:2000,
    })
    // alert(this.otpData)
    console.log(this.otpData);
  }

  otpV(){

    console.log("btn closed");
    

    if(this.otpg.value.otp===this.otpData){
    console.log(this.userLogin.value);
    console.log(this.userLogin);

    setTimeout(()=>{
      let user = localStorage.getItem('user');
    let UserId = user && JSON.parse(user).id;
    console.log(UserId);
      // this.cartService.getUserId(UserId)
    },500)
      

    // this.service.Login(this.userLogin.value).subscribe(item=>{
    //   console.log(item[0]);
    //   console.log(item.body);
      
    //   if(item){
    //     localStorage.setItem('user',JSON.stringify(item[0]))
    //     this.router.navigate(['/home'])
    //   }
    // })
    this.service.Login(this.userLogin.value)
    // this.loacalCartToJsonData()
    setTimeout(()=>{
      if(localStorage.getItem('user')){
        this.loacalCartToJsonData()
    
        }
    },500)

    }
    else{
      alert("Invalid OTP");
      this.showLogin=true;
      this.showOtp=false
    }
    
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
