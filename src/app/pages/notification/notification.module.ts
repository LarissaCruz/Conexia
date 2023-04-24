import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotificationComponent],
  exports: [
    NotificationModule
  ]
})
export class NotificationModule { }
