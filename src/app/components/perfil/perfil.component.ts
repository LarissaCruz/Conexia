import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/service/post/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  posts: any;
  usuario: any;
  userIdRoute: any;

  constructor(private postService: PostService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userIdRoute = params['userId']; // 'userId' é o nome do parâmetro de rota definido na configuração de rotas
      let idUsuario: number;

      if (this.userIdRoute) {
        idUsuario = Number(this.userIdRoute);
      } else {
        idUsuario = Number(localStorage.getItem('id'));
      }

      this.postService.listarPostUsuario(idUsuario).subscribe(
        (response) => {
          this.posts = response;
          this.usuario = response[0];
        },
        (error) => {
          //console.error("Erro ao obter os dados:", error);
          // Trate o erro de acordo com suas necessidades, exiba uma mensagem de erro ou tome outras ações necessárias.
        }
      );
    });
  }
}

