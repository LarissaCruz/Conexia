import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuarioService {
  idUsuario: string = "";
  dadosUsuario: any = {};
  usuario: any;

  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  registrarUsuario(): Observable<string> {
    return new Observable<string>((observer) => {
      this.http.post<any>(`${this.apiUrl}/account`, this.dadosUsuario).subscribe(
        (response) => {

          // Lógica para lidar com a resposta de sucesso
          //const responseData = JSON.parse(response);
          let status= "success"
          observer.next(response.status);
          observer.complete();
        },
        (error) => {
          let status= "erro"
          observer.next("status");
          observer.complete();
        }
      );
    });
  }

  login(login: string, password: string): Observable<string> {
    return new Observable<string>((observer) => {
      const params = { login, password };
      this.http.post<any>(`${this.apiUrl}/login`, params ).subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.id);
          localStorage.setItem('image', response.image);
          //observer.next(response);
          let status= "success"
          observer.next(status);

          observer.complete();
        },
        (error) => {
          console.error("Erro ao registrar usuário:", error);
          // Lógica para lidar com o erro
          let status= "erro"
          observer.next(status);
          observer.complete();
        }
      );
    });
  }
}
