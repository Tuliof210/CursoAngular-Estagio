import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle.component';



@NgModule({
  declarations: [DiretivaNgstyleComponent],
  imports: [
    CommonModule
  ],
  exports: [DiretivaNgstyleComponent]
})
export class DiretivaNgstyleModule { }
