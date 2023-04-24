import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule
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
