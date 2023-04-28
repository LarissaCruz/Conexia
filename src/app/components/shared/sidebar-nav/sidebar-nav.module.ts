import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNavComponent } from './sidebar-nav.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarNavComponent, ButtonComponent],
  exports: [
    SidebarNavComponent
  ]
})
export class SidebarNavModule { }
