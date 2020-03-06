import { Component, OnInit } from '@angular/core';
import { CursosServiceService } from '../shared/services/cursos-service.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosServiceService]
})
export class CursosComponent implements OnInit {

  cursos: string[];

  // toda variavel 'private' declarada no construtor faz com que a mesma se torne um atributo da classe
  constructor(private CursosService: CursosServiceService) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

    // se inscreve na emissao do component irmao, tem que ser static
    CursosServiceService.Novo.subscribe(curso => this.cursos.push(curso));
  }

}
