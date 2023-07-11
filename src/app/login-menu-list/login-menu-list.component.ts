import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-menu-list',
  templateUrl: './login-menu-list.component.html',
  styleUrls: ['./login-menu-list.component.css']
})
export class LoginMenuListComponent implements OnInit {

  menuType:string='default'

  constructor(private router:Router){}

  ngOnInit(): void {
    // console.log('hi');
    
    // this.router.events.subscribe((item:any)=>{
    //   if(localStorage.getItem('user')){
    //     let userStore = localStorage.getItem('user');
    //     let userData = userStore && JSON.parse(userStore);
    //     this.menuType='user'
    //   }
    //   else{
    //     this.menuType='default'
    //   }
    // })
  }
}
