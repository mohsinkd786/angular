import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'edit/:name',
    component: EditComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
