import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosUsuarioService {
  idUsuario: number = 0;
  dadosUsuario: any = {};

  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  registrarUsuario(): Observable<string> {
    return new Observable<string>((observer) => {
      this.http.post<any>(`${this.apiUrl}/registro`, this.dadosUsuario).subscribe(
        (response) => {
          console.log("Usuário registrado com sucesso:", response);
          // Lógica para lidar com a resposta de sucesso
          //const responseData = JSON.parse(response);
          observer.next(response.status);
          observer.complete();
        },
        (error) => {
          console.error("Erro ao registrar usuário:", error);
          // Lógica para lidar com o erro
          observer.next("error");
          observer.complete();
        }
      );
    });
  }

  login(email: string, senha: string): Observable<string> {
    return new Observable<string>((observer) => {
      const params = { email, senha };
      console.log(params)
      this.http.get(`${this.apiUrl}/login`, { params, responseType: 'text' }).subscribe(
        (response) => {

          const responseData = JSON.parse(response); // Converter a resposta de texto para objeto JSON
          this.idUsuario = responseData?.id;
          observer.next(responseData.status);
          observer.complete();
        },
        (error) => {
          console.error("Erro usuário não encontrado:", error);
          observer.next("error");
          observer.complete();
        }
      );
    }
    )
  }
}
