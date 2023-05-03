import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { SeguindoComponent } from './tab/seguindo/seguindo.component';
import { SeguidoresComponent } from './tab/seguidores/seguidores.component';
import { SidebarSuggestedModule } from '../shared/sidebar-suggested/sidebar-suggested.module';
import { SidebarNavModule } from '../shared/sidebar-nav/sidebar-nav.module';
import { PublicacaoModule } from './tab/publicacao/publicacao.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarNavModule,
    SidebarSuggestedModule,
    PublicacaoModule
  ],
  declarations: [PerfilComponent, SeguidoresComponent, SeguindoComponent],
  exports: [PerfilComponent]
})
export class PerfilModule { }
