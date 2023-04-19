import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container-step2',
  templateUrl: './form-container-step2.component.html',
  styleUrls: ['./form-container-step2.component.css']
})
export class FormContainerStep2Component implements OnInit {
  imageSrc: string | ArrayBuffer | null | undefined;
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
  }

  navigation() {
    this.router.navigate(['/register'])
  }

  goBack() {
    // Voltar para a página anterior
    this.location.back();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    // Função de retorno de chamada para ler o arquivo de imagem como URL de dados
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    // Lê o arquivo de imagem como URL de dados
    reader.readAsDataURL(file);
  }
}
