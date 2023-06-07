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
  constructor(private formBuilder: FormBuilder, private postService: PostService, private dadosUsuarioService: DadosUsuarioService) {
    this.formulario = this.formBuilder.group({
      texto: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  publicar() {
    if (this.formulario.valid) {
      this.postService.create(this.formulario.get('texto')?.value, this.dadosUsuarioService.idUsuario, this.imageSrc);
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
