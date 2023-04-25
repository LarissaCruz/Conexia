import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormContainerStep1Component } from './components/form-container-step1/form-container-step1.component';
import { FormContainerStep2Component } from './components/form-container-step2/form-container-step2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NavbarModule,
  ],
  declarations: [
    RegisterComponent,
    FormContainerStep1Component,
    FormContainerStep2Component,
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
