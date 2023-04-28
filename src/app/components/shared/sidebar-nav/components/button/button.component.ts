import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isLinkActive(url: string): boolean {
    return this.router.isActive(url, false);
  }
}
