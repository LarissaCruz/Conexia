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
      console.log('ID do usuário:', this.userIdRoute);

      let idUsuario: number;

      if (this.userIdRoute) {
        idUsuario = Number(this.userIdRoute);
      } else {
        idUsuario = Number(localStorage.getItem('token'));
      }

      this.postService.listarPostUsuario(idUsuario).subscribe(
        (response) => {
          this.posts = response.data;
          this.usuario = this.posts[0].Usuario;
          //console.log(this.usuario);
          //console.log("this.posts", this.posts);
        },
        (error) => {
          //console.error("Erro ao obter os dados:", error);
          // Trate o erro de acordo com suas necessidades, exiba uma mensagem de erro ou tome outras ações necessárias.
        }
      );
    });
  }
}

