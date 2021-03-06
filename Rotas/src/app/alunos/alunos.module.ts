import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosRoutingModule } from './alunos.module.routing';

import { AlunosService } from './alunos.service';

import { FormsModule } from '@angular/forms';

import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';

@NgModule({
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService,
    AlunosGuard,
    AlunosDeactivateGuard
  ]
})
export class AlunosModule { }
