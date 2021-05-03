import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DemoMaterialModule } from '../material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponentComponent, DashboardComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule
  ],
  bootstrap: [DashboardComponent,HomeComponentComponent],
  exports:[HomeComponentComponent]
})
export class HomeModule { }
