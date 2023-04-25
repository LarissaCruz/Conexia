import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './components/about/about.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

@NgModule({
  imports: [
    CommonModule,
    NavbarModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    BannerComponent,
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
