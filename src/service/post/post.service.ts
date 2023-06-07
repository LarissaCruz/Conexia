import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }



  create(texto: string, id: number, imageSrc: any): void {

    const params = { texto, id, imageSrc };
    console.log("teste", params)
    this.http.post<any>(`${this.apiUrl}/publicacoes`, { params, responseType: 'text' }).subscribe(
      (response) => {
        console.log("Publicação inserida:", response);
        // Lógica para lidar com a resposta de sucesso
      },
      (error) => {
        console.error("Erro ao registrar Publicação:", error);
        // Lógica para lidar com o erro
      }
    );
  }
}
