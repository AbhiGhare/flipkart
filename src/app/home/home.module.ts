import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FlipkartJsonService } from '../services/flipkart-json.service';
import { MaterialModule } from '../material/material.module';
import { CurrencyConverterPipe } from './currency-converter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CurrencyConverterPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  providers: [FlipkartJsonService],
  exports:[CurrencyConverterPipe]
})
export class HomeModule { }
