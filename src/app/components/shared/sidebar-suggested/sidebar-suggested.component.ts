import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sidebar-suggested',
  templateUrl: './sidebar-suggested.component.html',
  styleUrls: ['./sidebar-suggested.component.css']
})
export class SidebarSuggestedComponent implements OnInit {

  constructor(private http: HttpClient) { }
  usuarioLogado: any
  ngOnInit() {
    this.usuarioLogado = JSON.parse(localStorage.getItem('usuario') || 'null');
    const idade = this.usuarioLogado.idade;
    const id = this.usuarioLogado.id;

    const params = { idade, id };
    console.log(params);

    const url = 'http://localhost:3000/api/usuarios/sugestion';
    this.http.get(url, { params }).subscribe(
      (response: any) => {
        console.log('Usuários encontrados:', response.data);
        // Faça o que for necessário com os dados dos usuários encontrados, como atribuir a uma variável do componente
      },
      (error: any) => {
        console.error('Erro ao buscar os usuários:', error);
        // Trate o erro de acordo com suas necessidades, exiba uma mensagem de erro ou tome outras ações necessárias
      }
    );
  }


}
