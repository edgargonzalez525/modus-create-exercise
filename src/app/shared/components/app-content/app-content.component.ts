import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { LOGGED_USER } from '../../../core/mock/logged.user.mock';
import { Subject } from 'rxjs/Subject';
import { AuthService } from '../../../core/services/auth.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ng-e-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnDestroy {
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
