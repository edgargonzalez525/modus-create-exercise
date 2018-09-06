import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: User;
  private userLoggedIn: Subject<User> = new Subject<User>();
  private userLoggedOut: Subject<User> = new Subject<User>();

  public login(user: User) {
    this.user = user;
    this.userLoggedIn.next(user);
  }

  public logout() {
    this.userLoggedOut.next(this.user);
  }

  public onLoggedIn(): Observable<User> {
    return this.userLoggedIn.asObservable();
  }

  public onLoggedOut(): Observable<User> {
    return this.userLoggedOut.asObservable();
  }
}
