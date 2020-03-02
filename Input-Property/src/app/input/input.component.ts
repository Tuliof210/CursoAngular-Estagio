import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  //  esse decorator fara 'app-input' ter 'nome' como propriedade valida
  // tslint:disable-next-line: no-input-rename
  @Input('nome') nomeDoCurso: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
