import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObserveService } from 'src/service/observe/observe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mostrarBotao: boolean = true;

  constructor(private router: Router, protected observe: ObserveService) { }

  ngOnInit(): void {


  }
  naviation() {
    this.mostrarBotao = false
    this.router.navigate(['/login']);

  }

}
