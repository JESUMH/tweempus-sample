import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  providers: [AuthGuardService],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  // Para poder importarlo en el app module añadimos el array de exports
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
