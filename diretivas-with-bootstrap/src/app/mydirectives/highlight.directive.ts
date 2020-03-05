import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() corPadrao: string;
  // isso fara que o input abaixo tenha o mesmo nome da diretiva, economizando codigo
  @Input('highlight') corHighlight: string;

  @HostBinding('style.backgroundColor') get color() {
    return this.backgroundColor;
  }

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.corHighlight;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.corPadrao;
  }

  constructor() { }
  // assim que um elemento com essa diretiva for inicializado a mesma ira aplicar a cor
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.backgroundColor = this.corPadrao;
  }
}
