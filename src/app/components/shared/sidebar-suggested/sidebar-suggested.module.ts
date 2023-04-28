import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFollowComponent } from './components/card-follow/card-follow.component';
import { SidebarSuggestedComponent } from './sidebar-suggested.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarSuggestedComponent, CardFollowComponent],
  exports: [SidebarSuggestedComponent]
})
export class SidebarSuggestedModule { }
