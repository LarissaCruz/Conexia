import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-sidebar-suggested',
  templateUrl: './sidebar-suggested.component.html',
  styleUrls: ['./sidebar-suggested.component.css']
})
export class SidebarSuggestedComponent implements OnInit {
  private token = localStorage.getItem('token');
  public follow = []
  constructor(private http: HttpClient) { }
  usuarioLogado: any
  ngOnInit() {
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuario') || 'null');
    /*const idade = this.usuarioLogado.idade;
    const id = this.usuarioLogado.id;

    const params = { idade, id };
    console.log(params);*/
    const url = 'http://localhost:8080/api/v1/follow/recommend';
    //const url = 'http://localhost:3000/api/usuarios/sugestion';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    });

    this.http.get(url, { "headers": headers }).subscribe(
      (response: any) => {
        this.follow = response
        console.log('follow:',  this.follow );
        // Faça o que for necessário com os dados dos usuários encontrados, como atribuir a uma variável do componente
      },
      (error: any) => {
        console.error('Erro ao buscar os usuários:', error);
        // Trate o erro de acordo com suas necessidades, exiba uma mensagem de erro ou tome outras ações necessárias
      }
    );
  }
}
