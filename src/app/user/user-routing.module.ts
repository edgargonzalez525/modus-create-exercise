import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserDefaultComponent } from './pages/user-default/user-default.component';

const routes: Routes = [
  {
    path: '',
    component: UserDefaultComponent,
    children: [
      {
        path: 'list',
        component: UserListComponent
      }, {
        path: 'detail/:id',
        component: UserDetailComponent
      }, {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }, {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
