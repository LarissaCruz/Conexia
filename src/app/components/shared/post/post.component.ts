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
  constructor(private formBuilder: FormBuilder, private postService: PostService, private dadosUsuarioService: DadosUsuarioService) {
    this.formulario = this.formBuilder.group({
      texto: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  publicar() {
    if (this.formulario.valid) {
      this.postService.create(this.formulario.get('texto')?.value, this.dadosUsuarioService.idUsuario);
    }
  }
}
