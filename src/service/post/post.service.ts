import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concatMap, forkJoin, from, map, of, throwError, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  create(texto: string, id: number, imageSrc: any): void {
    const params = { texto, id, imageSrc };

    this.http.post<any>(`${this.apiUrl}/publicacoes`, { params, responseType: 'text' }).subscribe(
      (response) => {
        console.log("Publicação inserida:", response);
      },
      (error) => {
        console.error("Erro ao registrar Publicação:", error);
      }
    );
  }

  listarAllPost(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publicacoes`);
  }
  listarPostUsuario(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/publicacoes/${id}`);
  }


}
