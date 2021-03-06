import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.module.routing';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';

import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoencontradoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [CursosService]
})
export class CursosModule { }
