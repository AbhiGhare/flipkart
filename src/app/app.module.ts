import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginMenuListComponent } from './login-menu-list/login-menu-list.component';
import { MoreListComponent } from './more-list/more-list.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FlipkartJsonService } from './services/flipkart-json.service';
import { LoginMenuList2Component } from './login-menu-list2/login-menu-list2.component';
import { SnackBarOtpComponent } from './snack-bar-otp/snack-bar-otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { AddComponent } from './notifications/add/add.component';
import { RemoveComponent } from './notifications/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginMenuListComponent,
    MoreListComponent,
    FooterComponent,
    LoginMenuList2Component,
    SnackBarOtpComponent,
    FilterPipe,
    AddComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // MatCarouselModule
    HttpClientModule
  ],
  providers: [FlipkartJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
