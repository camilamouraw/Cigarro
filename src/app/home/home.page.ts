import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  quantidadeCigarros = 0;
  quantidadeAnos = 0;
  totalCigarros = 0;  

  tempoPerdido = 0;

  minutosPerdidos = 0;
  horasPerdidas = 0;
  diasPerdidos = 0;
  mesesPerdidos = 0;
  anosPerdidos = 0;


  constructor() {}

  CalcularTempo(){

    this.minutosPerdidos = this.quantidadeCigarros * 360 * this.quantidadeAnos * 10;
    this.horasPerdidas = this.minutosPerdidos / 60;
    this.diasPerdidos = this.horasPerdidas / 24;
    this.mesesPerdidos = this.diasPerdidos / 30;
    this.anosPerdidos = this.mesesPerdidos / 12;

  }
   
}
