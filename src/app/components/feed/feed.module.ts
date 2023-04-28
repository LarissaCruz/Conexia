import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SidebarSuggestedModule } from '../shared/sidebar-suggested/sidebar-suggested.module';
import { SidebarNavModule } from '../shared/sidebar-nav/sidebar-nav.module';


@NgModule({
  imports: [
    CommonModule,
    SidebarNavModule,
    SidebarSuggestedModule
  ],
  declarations: [FeedComponent],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
