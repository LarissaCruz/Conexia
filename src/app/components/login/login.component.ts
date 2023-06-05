import { ObserveService } from './../../../service/observe/observe.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DadosUsuarioService } from 'src/service/register/dados-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location, private observe: ObserveService) { }

  ngOnInit() {
    this.observe.hidden()
  }

  goBack() {
    // Voltar para a página anterior
    this.location.back();
  }



}
