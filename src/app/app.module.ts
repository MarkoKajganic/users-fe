import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddUserComponent,
    SingleUserComponent,
    EditUserComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    AuthGuard,
    AuthService,
    UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
