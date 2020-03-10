import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';

const CURSOS_ROUTES: Routes = [
  { path: '', component: CursosComponent },
  { path: 'notFound', component: CursoNaoencontradoComponent},
  { path: ':id', component: CursoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(CURSOS_ROUTES)],
  exports: [RouterModule]
})
export class CursosRoutingModule {}
