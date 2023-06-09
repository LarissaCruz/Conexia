import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  dados: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dados = JSON.parse(localStorage.getItem('usuario') || 'null');
    console.log("this.dados", this.dados);
  }

  isLinkActive(url: string): boolean {
    return this.router.isActive(url, false);
  }
}
