import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { SidebarNotificationModule } from 'src/app/shared/sidebar-notification/sidebar-notification.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    SidebarNotificationModule
  ],
  declarations: [PerfilComponent],
  exports:[PerfilComponent]
})
export class PerfilModule { }
