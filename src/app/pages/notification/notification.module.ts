import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { SidebarNotificationModule } from 'src/app/shared/sidebar-notification/sidebar-notification.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    SidebarNotificationModule
  ],
  declarations: [NotificationComponent],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
