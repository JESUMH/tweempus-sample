import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteTwimpsComponent } from './favourite-twimps/favourite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { ProfileComponent } from './profile/profile.component';

const profileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,

    children: [
      // Llamando a profile, nos redirige a my-twimps
      {
        path: '',
        redirectTo: '/profile/my-twimps',
        pathMatch: 'full'
      },
      {
        path: 'my-twimps',
        component: MyTwimpsComponent,
      },
      {
        path: 'favorite-twimps',
        component: FavouriteTwimpsComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)]
})
export class ProfileRoutingModule { }
