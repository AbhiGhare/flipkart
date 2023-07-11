import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-menu-list2',
  templateUrl: './login-menu-list2.component.html',
  styleUrls: ['./login-menu-list2.component.css']
})
export class LoginMenuList2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  logOut(){
    console.log('hi222');
    localStorage.removeItem('user');
    this.router.navigate(['/home'])
    
  }
}
