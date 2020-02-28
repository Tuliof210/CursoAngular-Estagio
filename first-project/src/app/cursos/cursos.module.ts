import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [CursosComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  // informações do ngmodulo que serao expostas para outro modulo
  exports: [CursosComponent]
})
export class CursosModule {}
