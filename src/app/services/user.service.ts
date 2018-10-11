import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class UserService {

  private users: User[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) { }


  public getUsers() {
    return new Observable((o: Observer<any>) => {
      this.http.get('http://127.0.0.1:8000/api/users', { headers: this.authService.getRequestHeaders() })
        .subscribe((users: any[]) => {
          this.users = users.map((user) => {
            return new User(
              user.id,
              user.email,
              user.password
            );
          });
          o.next(this.users);
          return o.complete();
        });
    });
  }

  public getOneUser(id: number) {
    return new Observable((o: Observer<any>) => {
      this.http.get(`http://127.0.0.1:8000/api/users/${id}`, { headers: this.authService.getRequestHeaders() })
        .subscribe((user: any) => {
          let fetchedUser = new User(
            user.id,
            user.email,
            user.password
          );
          o.next(fetchedUser);
          return o.complete();
        });
    });
  }

  public deleteUser(user: User) {
    console.log(user.id);
    return new Observable((o: Observer<any>) => {
      this.http.delete(`http://127.0.0.1:8000/api/users/${user.id}`, { headers: this.authService.getRequestHeaders() })
        .subscribe(
          () => {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);
            o.next(index);
            return o.complete();
          }
        );
    });
  }

  public addUser(user: User) {
    return new Observable((o: Observer<any>) => {
      this.http.post('http://127.0.0.1:8000/api/users/', {
        email: user.email,
        password: user.password
      },{ headers: this.authService.getRequestHeaders() })
            .subscribe((users: any) => {
            const user = new User(
              users.email,
              users.password
          );
          this.users.push(user);
          o.next(user);
          return o.complete();
        },(err: HttpErrorResponse) => {
            alert(`Backend returned code ${err.status} with message: ${err.error}`);
          } 
        );
    });
  }

  public editUser(user: User) {
    return this.http.put(`http://127.0.0.1:8000/api/users/${user.id}`, {
        email: user.email,
        password: user.password
      },{ headers: this.authService.getRequestHeaders() })
    }
    

}
