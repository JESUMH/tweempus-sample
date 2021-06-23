import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FavouriteTwimpsComponent } from './favourite-twimps/favourite-twimps.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MyTwimpsComponent,
    FavouriteTwimpsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
