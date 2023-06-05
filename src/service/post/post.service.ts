import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }



  create(texto: string, id: number): void {

    const params = { texto, id };
    console.log("teste", params)
    this.http.post<any>(`${this.apiUrl}/publicacoes`, { params, responseType: 'text' }).subscribe(
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
}
