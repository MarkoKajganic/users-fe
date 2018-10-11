import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private ActiveUser;
  private users: User[] = [];

  constructor(private userService: UserService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, (err: HttpErrorResponse) => {
      alert(`Backend returned code ${err.status} with message: ${err.error}`);
    });
    this.ActiveUser = localStorage.getItem('user');
    this.ActiveUser = JSON.parse(this.ActiveUser); 
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe();
    this.router.navigate(['/home']);
  }

}
