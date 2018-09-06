import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { LOGGED_USER } from '../../../core/mock/logged.user.mock';

@Component({
  selector: 'ng-e-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<null> = new Subject();
  user: User;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  public ngOnInit() {
    this.authService
      .onLoggedIn()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user: User) => {
        this.user = user;
        this.isLoggedIn = true;
      });

    this.authService
      .onLoggedOut()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.user = null;
        this.isLoggedIn = false;
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  public login() {
    this.authService.login(LOGGED_USER);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  public signup() {
    this.authService.login(LOGGED_USER);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  public logout() {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
