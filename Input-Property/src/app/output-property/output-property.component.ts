import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter(); // objeto emissor de eventos

  // Viewchild
  @ViewChild('campoInput') campoValorInput: ElementRef;

  Add() {
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.value});
  }
  Remove() {
    console.log(this.campoValorInput.nativeElement.value);
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.campoValorInput.nativeElement.values});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
