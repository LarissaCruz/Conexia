import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    ReactiveFormsModule,
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
