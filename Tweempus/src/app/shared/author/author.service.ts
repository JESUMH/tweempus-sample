import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Author } from './author-card/author.model';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url: string = 'http://localhost:3000/authors';
  private urlFavorite: string = 'http://localhost:300/author-favorites';
  constructor(private httpClient: HttpClient) {

  }

  // Recomienda utilizar observables debido a que en los componentes vamos a llamar a los servicios para completar los datos que recibimos en ese servicio
  getAuthor(id: string) : Observable<Author> {
    let author: Author;
    // pipe nos sirve para procesar los datos ya que el modelo no tiene por que ser igual que los del front
    return this.httpClient.get<Author>(this.url + '/' + id).pipe(
      map (dbAuthor => {
        author = new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        author.url = 'http://localhost:4200/author/' + dbAuthor.id;
        return author;
      }),
      //catchError(this.handleError)
    );
  }

  setAuthor(idAuthor: string, fullName: string, image: string): Observable<any> {
    let dbAuthor: any = {'id': idAuthor, 'fullName': fullName, 'image': image};

    //return this.httpClient.post(this.url, dbAuthor).pipe(catchError(this.handleError));
    return this.httpClient.post(this.url, dbAuthor);
  }

  createFavorite(idAuthor: string): Observable<any> {
    let dbAuthorFav: any = {'id': idAuthor, 'twimps': []};
    return this.httpClient.post(this.urlFavorite, dbAuthorFav);
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    //return Observable.throw(errMsg);
  }
}
