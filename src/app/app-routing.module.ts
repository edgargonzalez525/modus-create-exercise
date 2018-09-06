import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [{
  path: 'landing',
  component: LandingComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'user',
  loadChildren: 'app/user/user.module#UserModule'
}, {
  path: '**',
  redirectTo: 'landing'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
