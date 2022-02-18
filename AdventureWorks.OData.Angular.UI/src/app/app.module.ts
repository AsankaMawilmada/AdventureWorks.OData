import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './public/public.module';
import { SecuredModule } from './secured/secured.module';
import { SharedModule } from './shared/shared.module';

export const modules = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  SharedModule,
  PublicModule,
  SecuredModule
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
