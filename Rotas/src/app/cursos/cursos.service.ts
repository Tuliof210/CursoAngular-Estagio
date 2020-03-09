import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return[
      { id: 1, nome: 'Angular' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'C#' }
    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();

    for (let c of cursos) {
      if (c.id == id) {
        return c;
      }
    }
    return null;
  }

  constructor() { }
}
