import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
import { AuthorCardComponent } from './author/author-card/author-card.component';
import { RouterModule  } from '@angular/router';
import { AuthorService } from './author/author.service';
import { TwimpService } from './twimp/twimp.service';
import { SortByPipe } from './twimp/sort-by.pipe';

@NgModule({
  declarations: [
    TwimpCardComponent,
    TwimpListComponent,
    AuthorCardComponent,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthorService, TwimpService
  ],
  exports: [RouterModule, AuthorCardComponent, TwimpCardComponent, TwimpListComponent]
})
export class SharedModule { }
