import { Injectable } from '@angular/core';
import { DadosUsuarioService } from './dados-usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  constructor(private dadosUsuarioService: DadosUsuarioService) { }

  finalizarCadastro() {
    const dadosUsuario = this.dadosUsuarioService.dadosUsuario;

  }
}
