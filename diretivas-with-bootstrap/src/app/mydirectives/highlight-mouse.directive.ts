import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // faz um binding entre a diretiva e a propriedade
  // @HostBinding('style.backgroundColor') backgroundColor: string;

  // use a versao abaixo apenas quando houver necessidade de alguma manipulação
  @HostBinding('style.backgroundColor') get color() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = '#00FF00';
    // this._render.setStyle(this._element.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#FFFFFF';
    // this._render.setStyle(this._element.nativeElement, 'background-color', 'white');
  }

  // tslint:disable-next-line: variable-name
  constructor(/* private _element: ElementRef, private _render: Renderer2*/) { }

}
