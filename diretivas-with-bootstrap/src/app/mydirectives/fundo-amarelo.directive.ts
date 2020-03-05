// Necessario importar manualmente o 'ElementRef'
import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'p[fundoAmarelo]'
  // button[fundoAmarelo] restringiria a diretiva para funcionar apenas em botoes, por exemplo
})
export class FundoAmareloDirective {
  // tslint:disable-next-line: variable-name
  constructor(private _element: ElementRef) {
    // console.log(this._element);
    this._element.nativeElement.style.backgroundColor = 'yellow';
  }
}
