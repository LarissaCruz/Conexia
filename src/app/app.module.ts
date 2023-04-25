import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { FeedModule } from './pages/feed/feed.module';
import { PerfilModule } from './pages/perfil/perfil.module';
import { SearchModule } from './pages/search/search.module';
import { NotificationModule } from './pages/notification/notification.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    FeedModule,
    PerfilModule,
    NotificationModule,
    SearchModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
