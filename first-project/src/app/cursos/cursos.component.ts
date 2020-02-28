import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = [
    'java',
    'ext js',
    'angular'
  ];

  constructor() {
    this.nomePortal = 'http://loiane.training';


    // "tradução" ngFor no javascript
    for (let i=0;i<this.cursos.length;i++) {
      let curso = this.cursos[i];
    }
  }
  ngOnInit() {}
}
