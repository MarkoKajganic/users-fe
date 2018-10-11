import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  public user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let userId = params['id'];
      this.userService.getOneUser(userId).subscribe(data => {
        this.user = data;
      });
    });
  }

}
