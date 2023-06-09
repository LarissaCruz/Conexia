import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/service/post/post.service';
import { DadosUsuarioService } from 'src/service/register/dados-usuario.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  formulario: FormGroup;
  imageSrc: string | ArrayBuffer | null | undefined;
  constructor(private formBuilder: FormBuilder, private postService: PostService) {
    this.formulario = this.formBuilder.group({
      texto: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  async publicar() {
    if (this.formulario.valid) {
      try {
        const idUsuario = Number(localStorage.getItem('idUsuario'));
        console.log("teste", idUsuario)
        this.postService.create(this.formulario.get('texto')?.value, idUsuario, this.imageSrc);
        // Inserção bem-sucedida, atualizar a página
        location.reload(); // Atualizar a página manualmente
        // Ou redirecionar o usuário para a página de visualização de publicações
        // this.router.navigate(['/publicacoes']); // Redirecionar usando o roteador (caso esteja usando Angular com o Angular Router)
      } catch (error) {
        // Tratar erros durante a inserção
        console.error('Erro ao inserir a publicação:', error);
      }
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    // Função de retorno de chamada para ler o arquivo de imagem como URL de dados
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    // Lê o arquivo de imagem como URL de dados
    reader.readAsDataURL(file);
  }
}
