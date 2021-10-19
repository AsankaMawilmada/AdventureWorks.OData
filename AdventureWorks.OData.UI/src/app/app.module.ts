import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const modules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    modules    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
