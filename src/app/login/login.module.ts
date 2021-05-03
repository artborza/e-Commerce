import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[LoginComponentComponent]
})
export class LoginModule { }
