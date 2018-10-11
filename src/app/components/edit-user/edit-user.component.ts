import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = params['id'];
      this.userService.getOneUser(userId).subscribe(data => {
        this.user = data;
      });
    });
  }

  submit() {
    this.userService.editUser(this.user).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }

}
