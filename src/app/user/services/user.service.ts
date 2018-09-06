import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { User } from '../../core/models/user.model';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  private usersCache: User[];

  constructor(private http: HttpClient) {}

  public getUsers(size: number = 20): Observable<User[]> {
    if (this.usersCache) {
      return of(this.usersCache)
        .pipe(delay(100));
    }
    return this.http.get<UserPayload>(`https://randomuser.me/api/?nat=us&results=${size}`)
      .pipe(map((response) => {
        // save a users list cache to be able to later retrieve it by id
        this.usersCache = response.results.map((user, i) => {
          return {
            id: i + 1,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            phone: user.phone,
            picture: user.picture.large,
          };
        });

        return this.usersCache;
      }));
  }

  public getUser(id: number): Observable<User> {
    return this.getUsers()
      .pipe(map((users: User[]) => {
        const user = users.find(item => item.id === id);

        if (!user) {
          throw new Error(`User with id [${id}] does not exists`);
        }

        return user;
      }));
  }
}
