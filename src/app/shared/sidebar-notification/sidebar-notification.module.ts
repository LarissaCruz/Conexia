import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarNotificationComponent } from './sidebar-notification.component';
import { CardFollowComponent } from './components/card-follow/card-follow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarNotificationComponent, CardFollowComponent],
  exports: [SidebarNotificationComponent]
})
export class SidebarNotificationModule { }
