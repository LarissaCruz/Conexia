import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosUsuarioService } from 'src/service/register/dados-usuario.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  formulario: FormGroup;
  cadastroErro: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dadosUsuarioService: DadosUsuarioService
  ) {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)]],
      senha: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() { }

  navigationFeed() {
    if (this.formulario.valid) {
      const email = this.formulario.get('email')?.value;
      const senha = this.formulario.get('senha')?.value;

      this.dadosUsuarioService.login(email, senha).subscribe(
        (status) => {
          if (status === "success") {
            this.router.navigate(['/feed']);
          } else {
            this.cadastroErro = 'Erro não foi possivel localizar essa conta';
            setTimeout(() => {
              this.cadastroErro = '';
            }, 3000);
          }
        }
      );
    }
  }

  navigation() {
    this.router.navigate(['/register']);
  }
}
