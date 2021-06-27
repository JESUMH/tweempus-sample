import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';
import 'rxjs/add/observable/from';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  twimpList: Twimp[] = [];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private authService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.twimpService.getTwimps().subscribe(twimps => {
      Observable.from(twimps).subscribe((twimp: any) => {
        this.authorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          this.twimpService.getFavoritesByAuthor(this.authService.token!.idAuthor ,twimp.id).subscribe(favortie => {
            twimp.favorite = favortie;
            this.twimpList.push(twimp);
          })
        })
      })
    });
  }


}
