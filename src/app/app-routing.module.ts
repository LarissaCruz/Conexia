import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormContainerStep2Component } from './components/register/components/form-container-step2/form-container-step2.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FeedComponent } from './components/feed/feed.component';
import { SearchComponent } from './components/search/search.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacaoComponent } from './components/perfil/tab/publicacao/publicacao.component';
import { SeguidoresComponent } from './components/perfil/tab/seguidores/seguidores.component';
import { SeguindoComponent } from './components/perfil/tab/seguindo/seguindo.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
