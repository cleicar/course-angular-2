import { Injectable } from '@angular/core';

@Injectable() // decoration que indica Injeção de Dependência
export class CursosService {

  constructor() { }

  getCursos(){
  	return ['Java', 'Angular', 'Ext Js']
  }

}
