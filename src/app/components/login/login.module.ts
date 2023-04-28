import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { NavbarModule } from '../shared/navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
  ],
  declarations: [
    LoginComponent,
    FormLoginComponent,

  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
