import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { HomeModule } from './home/home.module';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { DemoMaterialModule } from './material-module';
import { DashboardComponent } from './home/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path:'',
    component:LoginComponentComponent   
  },
  {
    path:'home',
    component:HomeComponentComponent
  }
  ,
  {
    path:'dashboard',
    component:DashboardComponent
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    LoginModule,
    HomeModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
