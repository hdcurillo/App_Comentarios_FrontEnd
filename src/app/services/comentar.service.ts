import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarService {

  private myAppUrl = 'https://localhost:44317/';
  private myApi = 'api/comentario/'

  constructor(private http: HttpClient) { }

  getListComentarios(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApi);
  }

  deleteComentario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApi + id)
  }

  getComentario(id: number): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApi + id)
  }

  saveComentario(comentario: Comentario): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApi, comentario);
  }

  updateComentario(id: number, comentario: Comentario): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApi + id, comentario)
  }
}
