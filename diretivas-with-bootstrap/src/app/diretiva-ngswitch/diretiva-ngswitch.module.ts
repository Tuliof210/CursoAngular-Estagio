import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaNgswitchComponent } from './diretiva-ngswitch.component';

@NgModule({
  declarations: [ DiretivaNgswitchComponent ],
  imports: [
    CommonModule
  ],
  // conteudo que sera visivel para quem importar
  exports: [DiretivaNgswitchComponent]
})
export class DiretivaNgswitchModule { }
