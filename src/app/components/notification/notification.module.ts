import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { SidebarNavModule } from '../shared/sidebar-nav/sidebar-nav.module';
import { SidebarSuggestedModule } from '../shared/sidebar-suggested/sidebar-suggested.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarNavModule,
    SidebarSuggestedModule
  ],
  declarations: [NotificationComponent],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
