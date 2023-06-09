import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {
  @Input() posts: any[] | undefined;
  constructor() { }

  ngOnInit() {
  }

}
