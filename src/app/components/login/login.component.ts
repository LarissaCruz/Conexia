import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    // Voltar para a página anterior
    this.location.back();
  }

}
