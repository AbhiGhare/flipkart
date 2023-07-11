import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartJsonService {

  data:any;

  url='https://fakestoreapi.com/products/';
  url2='http://localhost:3000/fackData';
  url3='http://localhost:3000/search'
  constructor(private http:HttpClient) { }

  displayProduct():Observable<any>{
    return this.http.get<any>(this.url)
  }

  getData():Observable<any>{
    return this.http.get<any>(this.url2)
  }

  getOneItem(value:any){
    this.data=value
  }

  returnOneItem(){
    return this.data
  }

  postSearch(data:any):Observable<any>{
    return this.http.post<any>(this.url3,data)
  }

  getSearch():Observable<any>{
    return this.http.get<any>(this.url3)
  }

  deletePriviesData(id:any):Observable<any>{
    return this.http.delete<any>(this.url3+'/'+id)
  }

}
