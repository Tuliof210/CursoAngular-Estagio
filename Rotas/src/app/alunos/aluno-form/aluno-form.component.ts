import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

import { Subscription } from 'rxjs';

import { IFormDeactivate } from './../../guards/iform-deactivate.ts';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormDeactivate {

  // tslint:disable-next-line: no-inferrable-types variable-name
  public _mudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

    aluno: any = {};
    inscricao: Subscription;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  mudou() {
    // tslint:disable-next-line: no-unused-expression
    this._mudou = true;
  }

  podeDesativar() {
    return !this._mudou;
  }
}
