import { NgModule } from '@angular/core';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserDefaultComponent } from './pages/user-default/user-default.component';

@NgModule({
  imports: [
    UserRoutingModule,
    SharedModule,
  ],
  providers: [
    UserService,
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserDefaultComponent,
  ]
})
export class UserModule {}
