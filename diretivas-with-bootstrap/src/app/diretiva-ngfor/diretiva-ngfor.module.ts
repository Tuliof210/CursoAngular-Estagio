import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaNgforComponent } from './diretiva-ngfor.component';

@NgModule({
  declarations: [DiretivaNgforComponent],
  imports: [
    CommonModule
  ],
  exports: [DiretivaNgforComponent]
})
export class DiretivaNgforModule { }
