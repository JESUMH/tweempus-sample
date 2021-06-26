import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthorService } from '../shared/author/author.service';

import { Author } from '../shared/author/author-card/author.model';
import { TokenModel } from './token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string = 'http://localhost:3000/authenticated';
  token: TokenModel | undefined;

  constructor(
    private httpClient: HttpClient,
    private authorService: AuthorService,
    private router: Router
  ) { }

  // Para gestionar las sessiones tenemos Oauth, JWT y token
  login(idAuthor: string) : void {
    this.authorService.getAuthor(idAuthor).subscribe(author => {
      let tokenGenerated = this.generateToken();
      this.saveSession(tokenGenerated, author.id).subscribe((response: any) => {
        this.token = new TokenModel(response['id'], response['author']);
        this.router.navigate(['/dashboard']);
      })
    });
  }

  logout(): void {
    this.deleteSession().subscribe(response => {
      this.token = undefined;
      this.router.navigate(['/login']);
    });
  }

  generateToken(): string {
    let date: number = new Date().getTime();
    let text: string = '';
    let possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz0123456789';

    for (var i=0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    text += date;
    return text;
  }

  saveSession(tokenGenerated: string, idAuthor: string): Observable<Object> {
    let session: Object = {'id': tokenGenerated, 'author': idAuthor};

    return this.httpClient.post(this.url, session);
  }

  deleteSession(): Observable<Object> {
    return this.httpClient.delete(this.url + '/' + this.token?.key);
  }
}
