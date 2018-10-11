import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login(email, password) {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(email, password)
      .subscribe(
        () => {
          this.router.navigateByUrl('/');
        },
        (err: HttpErrorResponse) => {
          alert(`${err.error.error}`);
        }
      );
  }

}
