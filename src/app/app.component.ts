import { Component, OnInit } from '@angular/core';
import { Pasos } from './interfaces/pasos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'paso-a-paso';
  pasos: Pasos[] = [];

  constructor(
    private location:Location
  ) {}

  ngOnInit() {
    this.setPasos();
    this.getPasos();
  }

  // metodo que se usará en el init de la primera pantalla del flujo
  setPasos(){
    let pasos = [
      {
        id: 1,
        titulo: 'Paso 1',
        subtitulo: 'subtitulo paso 1',
        url: 'paso-1',
        estado: 'incompleto'
      },
      {
        id: 2,
        titulo: 'Paso 2',
        subtitulo: 'subtitulo paso 2',
        url: 'paso-2',
        estado: 'incompleto'
      },
      {
        id: 3,
        titulo: 'Paso 3',
        subtitulo: 'subtitulo paso 3',
        url: 'paso-3',
        estado: 'incompleto'
      },
    ];
    localStorage.setItem('pasos', JSON.stringify(pasos));
  }
  // metodo que se usará en las pantallas donde se use el paso a paso
  getPasos(){
   this.pasos = JSON.parse(localStorage.getItem('pasos')!);
   if(!this.pasos || this.pasos.length == 0){
    return
   }
   this.marcarPasoEnProgreso();
  }

  //metodo que valida la url para marcar el paso en progreso
  marcarPasoEnProgreso(){
   let urlActual = this.location.path();
   let indexPasoActual = this.pasos.findIndex((paso:Pasos)=> urlActual.includes(paso.url));
   this.pasos[indexPasoActual].estado = 'progreso';
   this.validarPasosAnteriores(indexPasoActual);
   this.actualizarStorage(this.pasos);
  }


  //metodo para validar que los pasos anteriores esten completos
  validarPasosAnteriores(indexPasoActual: number){
    // let arrayTemporal = this.pasos.slice(0, indexPasoActual);
    // console.log(arrayTemporal)
    // if(arrayTemporal.some(paso=> paso.estado != 'completo')){
    //   this.pasos = [];
    //   this.actualizarStorage([]);
    // }
  }


  //metodo para actualizar local storage y estado del paso a paso
  actualizarPaso(index: number) {
    this.pasos[index].estado = 'completo';
    this.actualizarStorage(this.pasos);
  }

  actualizarStorage(pasos:Pasos[]){
    localStorage.removeItem('pasos');
    localStorage.setItem('pasos', JSON.stringify(pasos));
  }
}
