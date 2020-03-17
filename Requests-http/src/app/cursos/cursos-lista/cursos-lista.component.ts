import { Component, OnInit, ViewChild } from '@angular/core';
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
    private modalservice: BsModalService,
    private service: CursosService,
    private alert: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // o dolar é uma convenção para deixar claro que a variavel é um observable
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  deleteModalRef: BsModalRef;

  cursoSelecionado: Curso;

  @ViewChild('deleteModal') deleteModal; // referencia a variavel local do template

  handleError() {
    this.alert.showDanger('Erro ao carregar a lista de cursos.');
  }

  onEdit(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route});
  }

  onDelete(c: Curso) {
    this.cursoSelecionado = c;
    this.deleteModalRef = this.modalservice.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {

    this.service.remove(this.cursoSelecionado.id).subscribe(
      success => this.onRefresh(),
      error => this.alert.showDanger('Erro ao remover curso.')
    );

    this.deleteModalRef.hide();
    console.log('Sumiu!');
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
    console.log('arregou');
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
