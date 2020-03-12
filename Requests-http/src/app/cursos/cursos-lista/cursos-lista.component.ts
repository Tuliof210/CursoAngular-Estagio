import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true // evita minificação do html
})
export class CursosListaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
