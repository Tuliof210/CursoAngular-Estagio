import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Curso } from './../curso';
import { CursosService } from '../cursos.service';

import { AlertModalService } from './../../shared/alert-modal.service';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';


@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true // evita minificação do html
})
export class CursosListaComponent implements OnInit {

  constructor(
    private service: CursosService,
    private alert: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // o dolar é uma convenção para deixar claro que a variavel é um observable
  cursos$: Observable<Curso[]>;

  error$ = new Subject<boolean>();

  handleError() {
    this.alert.showDanger('Erro ao carregar a lista de cursos.');
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route});
  }

  onDelete(id: number) {
  }

  onRefresh() {
    this.cursos$ = this.service.list()
    .pipe(
      catchError(e => {
        console.error(e);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }
}
