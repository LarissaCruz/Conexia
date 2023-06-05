import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosUsuarioService } from 'src/service/register/dados-usuario.service';

@Component({
  selector: 'app-form-container-step2',
  templateUrl: './form-container-step2.component.html',
  styleUrls: ['./form-container-step2.component.css']
})
export class FormContainerStep2Component implements OnInit {
  imageSrc: string | ArrayBuffer | null | undefined;
  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, private dadosUsuarioService: DadosUsuarioService) { }

  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["", Validators.required],
      sobrenome: ["", Validators.required],
      dataNascimento: ["", Validators.required],
      cidade: ["", Validators.required]
    });
  }

  onSave() {
    if (this.formulario.valid) {
      this.dadosUsuarioService.dadosUsuario.nome = this.formulario.controls?.['nome'].value;
      this.dadosUsuarioService.dadosUsuario.sobrenome = this.formulario.controls?.['sobrenome'].value;
      this.dadosUsuarioService.dadosUsuario.idade = this.formulario.controls?.['dataNascimento'].value;
      this.dadosUsuarioService.dadosUsuario.cidade = this.formulario.controls?.['cidade'].value;

      this.dadosUsuarioService.registrarUsuario();
    }
  }

  navigation() {
    this.router.navigate(['/register'])
  }

  goBack() {
    // Voltar para a página anterior
    this.location.back();
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
