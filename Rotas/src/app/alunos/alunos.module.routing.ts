import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

const ALUNOS_ROUTES = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent}, // hardcoded antes
    { path: ':id', component: AlunoDetalheComponent}, // dinamico depois
    { path: ':id/editar', component: AlunoFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(ALUNOS_ROUTES)],
  exports: [RouterModule]
})
export class AlunosRoutingModule {}
