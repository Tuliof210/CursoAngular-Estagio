import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  nomeDoCurso: string = 'Angular 2 estagio';

  ValInicial: number = 2;


  onMudouValor(event) {
    console.log(event.novoValor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
