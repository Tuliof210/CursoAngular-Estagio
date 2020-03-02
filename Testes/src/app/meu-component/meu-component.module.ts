import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhaDiretivaDirective } from './minha-diretiva.directive';
import { MeuPipePipe } from './meu-pipe.pipe';



@NgModule({
  declarations: [MinhaDiretivaDirective, MeuPipePipe],
  imports: [
    CommonModule
  ]
})
export class MeuComponentModule { }
