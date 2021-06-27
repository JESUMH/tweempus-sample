import { Injectable } from '@angular/core';
import { Author } from '../author/author-card/author.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Twimp } from './twimp.model';
@Injectable({
  providedIn: 'root'
})
export class TwimpService {

  private url: string = "http://localhost:3000/twimps";
  private urlFavorite: string = "http://localhost:3000/author-favorites";
  constructor(private httpClient: HttpClient) { }

  getTwimps(): Observable<Twimp[]> {
    let twimps: Twimp[] = [];

    return this.httpClient.get(this.url).pipe(
      map((dbTwimpList: any) => {
        for(let i in dbTwimpList) {
          let twimp: Twimp = new Twimp(dbTwimpList[i].id, 'localhost:4200/twimp/' + dbTwimpList[i].id,
          new Author(dbTwimpList[i].author),dbTwimpList[i].content, dbTwimpList[i].timestamp);
          twimps.push(twimp);
        }
        return twimps;
      })
    )
  }

  getFavoritesByAuthor(idAuthor: string, idTwimp: string): Observable<boolean> {
    return this.httpClient.get(this.urlFavorite + '/' + idAuthor).pipe(
      map((response: any) => {
        let favorites: string[] = response['twimps'] ;
        if (favorites.indexOf(idTwimp) == -1) {
          return false;
        } else {
          return true;
        }
        return response;
      })
    );
  }

  setTwimp(twimp: Twimp): Observable<any> {
    let dbTwimp: any = {
      'id': twimp.id,
      'author': twimp.author,
      'by': twimp.author.fullName,
      'content': twimp.content,
      'timestamp': twimp.timestamp
    }

    return this.httpClient.post(this.url, dbTwimp);
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    //return Observable.throw(errMsg);
  }
}
