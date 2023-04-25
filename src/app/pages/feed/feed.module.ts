import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { SidebarNotificationModule } from 'src/app/shared/sidebar-notification/sidebar-notification.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    SidebarNotificationModule
  ],
  declarations: [FeedComponent],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
