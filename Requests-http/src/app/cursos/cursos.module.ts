import { CursosFormComponent } from './cursos-form/cursos-form.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CursosRouting } from './cursos.routing';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent
  ],
  imports: [
    CommonModule,
    CursosRouting,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
