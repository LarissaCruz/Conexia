import { Injectable } from '@angular/core';
import { DadosUsuarioService } from './dados-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private dadosUsuarioService: DadosUsuarioService) { }

  finalizarCadastro() {
    const dadosUsuario = this.dadosUsuarioService.dadosUsuario;
    // Aqui você pode acessar os dados do usuário e finalizar o cadastro
    console.log(dadosUsuario);
  }
}
