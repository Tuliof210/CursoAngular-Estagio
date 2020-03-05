// Necessario importar manualmente o 'ElementRef'
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'p[fundoAmarelo]'
  // button[fundoAmarelo] restringiria a diretiva para funcionar apenas em botoes, por exemplo
})
export class FundoAmareloDirective {
  // tslint:disable-next-line: variable-name
  constructor(private _element: ElementRef, private _renderer: Renderer2) {
    this._renderer.setStyle(this._element.nativeElement, 'background-color', 'yellow');
  }
}
