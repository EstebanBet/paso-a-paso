import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasoAPaso } from '../interfaces/pasos';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  consultarPasos(){
    return this.http.get<PasoAPaso>('/assets/pasos.json'); 
  }



}
