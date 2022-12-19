import { Component, OnInit, } from '@angular/core';
import {ecuacion} from '../ecuacion/ecuacion'; 

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
  arrayX: number[] = [];
  cadenaX = "";
  valorA = 0;
  valorB = 0; 
  numero = ""; 
  ver_arreglo = "";
  sumatoria = "";
  resultado: number[] = [];

  ngOnInit(){

  }

  calcular(){
    this.agregar();
    console.log("arreglox: " + this.arrayX);
    let miresult: number[] = [];
    miresult = ecuacion(this.arrayX, this.valorA, this.valorB);
    this.resultado = miresult;
    return this.resultado;
  }

  agregar(){
  this.numero = this.numero +  ",";
  for(let i = 0; i < this.numero.length; i++ ){
    let num = this.numero.charAt(i);
    if(num != ","){
      this.sumatoria = this.sumatoria + num;
    }else{
      for(let x = 1; x <= 1; x++){
        this.arrayX[this.arrayX.length] = parseInt(this.sumatoria);
        this.sumatoria="";
      }    
    }
  }
}

}
