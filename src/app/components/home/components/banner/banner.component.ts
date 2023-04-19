import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigation() {
    this.router.navigate(['/register'])
  }
}
