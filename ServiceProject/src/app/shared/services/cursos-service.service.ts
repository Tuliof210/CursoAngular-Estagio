import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceService {

  emitirCursoCriado = new EventEmitter<string>();

  // tslint:disable-next-line: member-ordering
  static Novo = new EventEmitter<string>();

  private cursos: string[] = ['Angular 2', 'Java', 'Python'];

  constructor(private logservice: LogService) {
    console.log('CursosService');
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosServiceService.Novo.emit(curso);

    this.logservice.print(`Criando um novo curso: ${curso}`);
  }

  getCursos() {
    this.logservice.print(`Obtendo lista de cursos: ${this.cursos}`);
    return this.cursos;
  }
}
