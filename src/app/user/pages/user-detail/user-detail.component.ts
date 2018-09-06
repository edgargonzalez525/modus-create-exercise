import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { finalize, takeUntil } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'ng-e-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  private destroy$: Subject<null> = new Subject();
  public user: User;
  public loadingUser = false;
  public userError = '';

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  public ngOnInit() {
    this.route.params
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((params: Params) => {
        const id: number = parseInt(params.id);

        this.getUserDetails(id);
      });
  }

  private getUserDetails(id: number): any {
    this.loadingUser = true;
    this.userService.getUser(id)
      .pipe(
        finalize(() => this.loadingUser = false)
      )
      .subscribe((user: User) => {
        this.user = user;
      }, (error: Error) => {
        this.userError = error.message;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
