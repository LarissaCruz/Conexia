import { Component, OnInit } from '@angular/core';
import { DadosUsuarioService } from '../../../../../service/register/dados-usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-container-step1',
  templateUrl: './form-container-step1.component.html',
  styleUrls: ['./form-container-step1.component.css']
})
export class FormContainerStep1Component implements OnInit {

  constructor(
    private dadosUsuarioService: DadosUsuarioService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }
  formulario!: FormGroup;

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ["", Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      senha: ["", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
      confirm: ["", Validators.compose([
        Validators.required,
        Validators.minLength(3)
      ])],
    })
  }
  async salvarEtapa1() {
    if (this.formulario.valid) {
      this.dadosUsuarioService.dadosUsuario.email = this.formulario.controls?.['email'].value;
      this.dadosUsuarioService.dadosUsuario.senha = this.formulario.controls?.['senha'].value;
      this.dadosUsuarioService.dadosUsuario.confirmSenha = this.formulario.controls?.['confirm'].value;
      await this.router.navigate(['/form-step-2'])
    }


  }

  navigation() {
    this.router.navigate(['/login'])

  }
  goBack() {
    // Voltar para a página anterior
    this.location.back();
  }

}
