import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChineseActionModule } from './chinese-action/chinese-action.module';
import {  HttpClientModule } from '@angular/common/http';
import { PayLoginComponent } from './chinese-action/Components/pay-login/pay-login.component';


@NgModule({
  declarations: [
    AppComponent,
    PayLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ChineseActionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
