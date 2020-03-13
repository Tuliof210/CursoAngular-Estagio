import { Component, OnInit } from '@angular/core';

import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Curso } from './../curso';
import { CursosService } from '../cursos.service';



@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true // evita minificação do html
})
export class CursosListaComponent implements OnInit {

  constructor(private service: CursosService) { }

  // o dolar é uma convenção para deixar claro que a variavel é um observable
  cursos$: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(e => {
        console.error(e);
        this.error$.next(true);
        return empty();
      })
    );
  }

  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }
}
