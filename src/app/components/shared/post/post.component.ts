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
  cadastroSucesso: string = '';
  cadastroErro: string = '';
  cadastroErroWarning: string = '';
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
        const idUsuario = localStorage.getItem('token');
        console.log("teste", idUsuario)


        location.reload(); // Atualizar a página manualmente

        this.postService.create(this.formulario.get('texto')?.value, this.imageSrc).subscribe(
          (status) => {
            if (status === "success") {
              this.cadastroSucesso = 'Cadastro realizado com sucesso!';
              this.cadastroErro = '';
              setTimeout(() => {
                this.cadastroSucesso = '';
              }, 3000); // Remover o alerta após 3 segundos (3000 milissegundos)
            } else if (status === "duplicidade") {
              this.cadastroErroWarning = 'Erro esse email já esta sendo usado';
              this.cadastroSucesso = '';
              this.cadastroErro = '';
              setTimeout(() => {
                this.cadastroErroWarning = '';
              }, 3000);
            } else {
              this.cadastroErro = 'Erro não foi possivel finalizar o cadastro';
              this.cadastroSucesso = '';
              setTimeout(() => {
                this.cadastroErro = '';
              }, 3000);
            }
          }
        );
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
