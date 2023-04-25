import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerStep2Component } from './pages/register/components/form-container-step2/form-container-step2.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FeedComponent } from './pages/feed/feed.component';
import { SearchComponent } from './pages/search/search.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PublicacaoComponent } from './pages/perfil/tab/publicacao/publicacao.component';
import { SeguidoresComponent } from './pages/perfil/tab/seguidores/seguidores.component';
import { SeguindoComponent } from './pages/perfil/tab/seguindo/seguindo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form-step-2',
    component: FormContainerStep2Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent

  },
  {
    path: 'publicacao',
    component: PublicacaoComponent,

  },
  {
    path: 'seguidores',
    component: SeguidoresComponent,

  },
  {
    path: 'seguindo',
    component: SeguindoComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
