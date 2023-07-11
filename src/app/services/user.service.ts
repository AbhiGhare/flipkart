import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:3000/user';

  constructor( private http:HttpClient,private router:Router) { }

  signUP(data:any):Observable<any>{
    return this.http.post<any>(this.url,data)
  }

  Login(data:any){
    this.http.get<any[]>(`http://localhost:3000/user?mobile=${data.mobile}`,{observe:'response'}).subscribe(res=>{
      console.log(res);
      console.log(res.body?.length);
      
    if(res.body?.length){
      localStorage.setItem('user',JSON.stringify(res.body[0]));
      this.router.navigate(['/home'])
    }else{
      alert('invalid mobile no')
    }
   })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/home'])
    }
  }
}
