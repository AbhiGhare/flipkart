import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GroceryComponent } from './grocery/grocery.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'flipkart-item',
        component:FlipkartComponent
      },
      {
        path:'grocery-item',
        component:GroceryComponent
      },
      {
        path:'',
        redirectTo:'flipkart-item',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
