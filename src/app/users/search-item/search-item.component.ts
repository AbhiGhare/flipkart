import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FlipkartJsonService } from 'src/app/services/flipkart-json.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  data:any[]=[];
  constructor(private flipkart:FlipkartJsonService,private cartServices:CartService,private router:Router){}

  ngOnInit(): void {
    this.flipkart.getSearch().subscribe(item=>{
      if(item.length>=2){
        console.log(item.length);
        
        console.log(item[1].id);
        setTimeout(() => {
          this.flipkart.deletePriviesData(item[0].id).subscribe(a=>{
            console.log('a',a);
            this.flipkart.getSearch().subscribe(item2=>{
            this.data=item2
            console.log('data',this.data);
            })
            
          })
        }, 500);
     
      }else if(item.length==1){
        console.log(item.length);

        this.data=item
        console.log('data',this.data);
      }
      

    })
    // console.log(this.data[0].title);

    
  }

  addtoCart(data:any){
    console.log('one data',data);
    
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

      this.router.navigate(['/cart'])
    
  }
  
}
