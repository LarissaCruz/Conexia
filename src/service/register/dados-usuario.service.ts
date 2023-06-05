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

  registrarUsuario(): void {
    this.http.post<any>(`${this.apiUrl}/registro`, this.dadosUsuario).subscribe(
      (response) => {
        console.log("Usuário registrado com sucesso:", response);
        // Lógica para lidar com a resposta de sucesso
      },
      (error) => {
        console.error("Erro ao registrar usuário:", error);
        // Lógica para lidar com o erro
      }
    );
  }

  login(email: string, senha: string): void {
    const params = { email, senha };
    this.http.get(`${this.apiUrl}/login`, { params, responseType: 'text' }).subscribe(
      (response) => {
        const responseData = JSON.parse(response); // Converter a resposta de texto para objeto JSON
        this.idUsuario = responseData?.id;
        console.log("Usuário encontrado com sucesso:", this.idUsuario);
        // outras operações com a resposta
      },
      (error) => {
        console.error("Erro usuário não encontrado:", error);
        // tratamento de erro
      }
    );

  }
}
