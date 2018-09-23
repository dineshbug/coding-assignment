import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { FollowersComponent } from './followers/followers.component';
 
/*---------------------------------LazyLoadingModules-start-----------------------------*/
export const routes: Routes = [
{ path: '', component: LoginComponent},
{ path: 'login', component: LoginComponent},
{ path: 'users', component: UsersComponent},
{ path: 'users-profile', component: UsersProfileComponent},
{ path: 'followers', component: FollowersComponent},


//[++ Add block signature ++]
{ path: '**', component: LoginComponent}
];
/*---------------------------------LazyLoadingModules-End-----------------------------*/
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
