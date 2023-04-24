import { ObserveService } from './../../../service/observe/observe.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
