import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, concatMap, forkJoin, from, map, of, throwError, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/v1';
  private token = localStorage.getItem('token');
  private id = Number(localStorage.getItem('id'));
  constructor(private http: HttpClient) { }

  padZero(value: number): string {
    return value < 10 ? `0${value}` : value.toString(); // Adiciona um zero à esquerda se o valor for menor que 10
  }


  create(body: string, image: any): Observable<string> {
    return new Observable<string>((observer) => {
      const currentDate = new Date(); // Cria um objeto Date com a data atual
      const year = currentDate.getFullYear(); // Obtém o ano com 4 dígitos
      const month = this.padZero(currentDate.getMonth() + 1); // Obtém o mês (lembre-se de adicionar 1 ao valor retornado pelo getMonth)
      const day = this.padZero(currentDate.getDate()); // Obtém o dia

      let date = `${year}-${month}-${day}`;
      const params = {  body, date, image};

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      });
      this.http.post<any>(`${this.apiUrl}/post`, params,  { "headers": headers}).subscribe(
        (response) => {
          let status = "sucess"
          console.log("Publicação inserida:", response);
        },
        (error) => {
          let status = "error"
          console.error("Erro ao registrar Publicação:", error);
        }
      );
    });
  }



  listarAllPost(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`,
    });

    return this.http.get<any>(`${this.apiUrl}/post`, { "headers": headers});
  }
  listarPostUsuario(id: number): Observable<any> {
    console.log("this.id", this.id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.token}`,
    });
    return this.http.get<any>(`${this.apiUrl}/post/author/${this.id}`,  { "headers": headers});
  }
}
