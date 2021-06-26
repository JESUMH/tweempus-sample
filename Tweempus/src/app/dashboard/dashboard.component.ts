import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';
import 'rxjs/add/observable/from';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  twimpList: Twimp[] = [];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService
    ) { }

  ngOnInit(): void {
    this.twimpService.getTwimps().subscribe(twimps => {
      Observable.from(twimps).subscribe((twimp: any) => {
        this.authorService.getAuthor(twimp.author.id).subscribe(author => {
          twimp.author = author;
          this.twimpService.getFavoritesByAuthor('1',twimp.id).subscribe(favortie => {
            twimp.favorite = favortie;
            this.twimpList.push(twimp);
          })
        })
      })
    });
  }


}
