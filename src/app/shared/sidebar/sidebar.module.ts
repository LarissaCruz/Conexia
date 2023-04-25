import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, ButtonComponent],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
