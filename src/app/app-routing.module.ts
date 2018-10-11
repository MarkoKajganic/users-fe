import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-user',
    canActivate: [AuthGuard],
    component: AddUserComponent
  },
  {
    path: 'users/:id',
    canActivate: [AuthGuard],
    component: SingleUserComponent
  },
  {
    path: 'users/edit/:id',
    canActivate: [AuthGuard],
    component: EditUserComponent
  },



];

@NgModule({
  imports: [
      RouterModule.forRoot(
          appRoutes
      )
  ],
  exports: [
      RouterModule
  ]
})export class AppRoutingModule {}
