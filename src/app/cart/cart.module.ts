import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GroceryComponent } from './grocery/grocery.component';
import { HomeModule } from '../home/home.module';
// import { CurrencyConverterPipe } from './currency-converter.pipe';
@NgModule({
  declarations: [
    DashboardComponent,
    FlipkartComponent,
    GroceryComponent,
    // CurrencyConverterPipe,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    HomeModule

  ]
})
export class CartModule { }
