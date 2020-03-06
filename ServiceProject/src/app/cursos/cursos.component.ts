import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = ['angular', 'javascript', 'c#'];

  // toda variavel 'private' declarada no construtor faz com que a mesma se torne um atributo da classe
  constructor() { }

  ngOnInit(): void {
  }

}
