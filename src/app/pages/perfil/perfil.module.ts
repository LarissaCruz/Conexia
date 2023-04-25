import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { SidebarNotificationModule } from 'src/app/shared/sidebar-notification/sidebar-notification.module';
import { SeguindoComponent } from './tab/seguindo/seguindo.component';
import { SeguidoresComponent } from './tab/seguidores/seguidores.component';
import { PublicacaoComponent } from './tab/publicacao/publicacao.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    SidebarNotificationModule
  ],
  declarations: [PerfilComponent, PublicacaoComponent, SeguidoresComponent, SeguindoComponent],
  exports: [PerfilComponent]
})
export class PerfilModule { }
