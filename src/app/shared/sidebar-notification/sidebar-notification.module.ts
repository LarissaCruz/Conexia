import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNotificationComponent } from './sidebar-notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarNotificationComponent],
  exports:[SidebarNotificationComponent]
})
export class SidebarNotificationModule { }
