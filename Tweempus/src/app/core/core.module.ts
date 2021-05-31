import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  // Para poder importarlo en el app module añadimos el array de exports
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class CoreModule { }
