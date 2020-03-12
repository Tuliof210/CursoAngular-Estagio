import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRouting } from './cursos.routing';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    CursosRouting
  ]
})
export class CursosModule { }
