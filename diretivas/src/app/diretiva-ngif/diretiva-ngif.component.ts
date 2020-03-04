import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['a'];

  // tslint:disable-next-line: no-inferrable-types
  showCursos: boolean = false;

  showCurso() {
    this.showCursos = !this.showCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
