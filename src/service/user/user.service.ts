import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dadosUsuario: any = {};
  constructor(private httpClient: HttpClient) { }

  createUser(): Observable<any> {
    const user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456'
    };

    return this.httpClient.post('http://localhost:3000/users', user).pipe(
      catchError(error => {
        console.error('Erro ao criar usuário:', error);
        return throwError(() => error);
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    const credentials = {
      email: email,
      password: password
    };

    return this.httpClient.post('http://localhost:3000/login', credentials).pipe(
      catchError(error => {
        console.error('Erro ao fazer login:', error);
        return throwError(() => error);
      })
    );
  }
}
