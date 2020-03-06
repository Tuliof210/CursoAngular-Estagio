import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  emitirCursoCriado = new EventEmitter<string>();

  // tslint:disable-next-line: member-ordering
  static Novo = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Python'];

  constructor() {
    console.log('CursosService');
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosServiceService.Novo.emit(curso);
  }

  getCursos() {
    return this.cursos;
  }
}
