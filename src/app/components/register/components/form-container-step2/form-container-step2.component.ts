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
  selectedFile: File | undefined;
  imageSrc: string | ArrayBuffer | null | undefined;
  cadastroSucesso: string = '';
  cadastroErro: string = '';
  cadastroErroWarning: string = '';
  formulario!: FormGroup;
  status: string = ''
  constructor(private router: Router, private location: Location, private formBuilder: FormBuilder, private dadosUsuarioService: DadosUsuarioService) { }

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
      this.dadosUsuarioService.dadosUsuario.firstName = this.formulario.controls?.['nome'].value;
      this.dadosUsuarioService.dadosUsuario.lastName = this.formulario.controls?.['sobrenome'].value;
      this.dadosUsuarioService.dadosUsuario.birthday = this.formulario.controls?.['dataNascimento'].value;
      this.dadosUsuarioService.dadosUsuario.city = this.formulario.controls?.['cidade'].value;
      this.dadosUsuarioService.dadosUsuario.favouriteColour = 1;
      this.dadosUsuarioService.dadosUsuario.image = this.imageSrc;


      this.dadosUsuarioService.registrarUsuario().subscribe(
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
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();

    // Função de retorno de chamada para ler o arquivo de imagem como URL de dados
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    // Lê o arquivo de imagem como URL de dados
    if (this.selectedFile)
      reader.readAsDataURL(this.selectedFile);
  }
}
