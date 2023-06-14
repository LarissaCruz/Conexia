import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-follow',
  templateUrl: './card-follow.component.html',
  styleUrls: ['./card-follow.component.css']
})
export class CardFollowComponent implements OnInit {
  @Input() follow: any | undefined;

  constructor() { }

  ngOnInit() {
  }

}
