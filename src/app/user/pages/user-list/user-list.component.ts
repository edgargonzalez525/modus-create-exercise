import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../core/models/user.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-e-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements AfterViewInit {
  public users: User[] = [];
  public displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone'];
  public dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
              private router: Router) { }

  public ngAfterViewInit(): void {
    this.loadData();
  }

  public rowClicked(user: User) {
    this.router.navigate(['/user/detail', user.id]);
  }

  private loadData(): void {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

}
