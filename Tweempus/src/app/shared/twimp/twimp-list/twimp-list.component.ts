import { Component, OnInit } from '@angular/core';
import { Author } from '../../author.model';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css']
})
export class TwimpListComponent implements OnInit {
  text: string = 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ';
  twimps: Twimp[] = [];
  authors: Author[] = [];

  ngOnInit(): void {
    this.authors.push(new Author('1'));
    this.twimps.push(new Twimp('1', '', this.authors[0], this.text, '01/01/2000', false));
    this.twimps.push(new Twimp('2', '', this.authors[0], this.text, '01/01/2000', false));
    this.twimps.push(new Twimp('3', '', this.authors[0], this.text, '01/01/2000', false));
    this.twimps.push(new Twimp('4', '', this.authors[0], this.text, '01/01/2000', false));
  }
}
