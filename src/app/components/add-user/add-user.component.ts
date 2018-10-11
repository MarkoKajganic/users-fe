import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public user: User = new User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.userService.addUser(this.user).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
