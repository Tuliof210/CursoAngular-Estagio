import { CursosServiceService } from './../shared/services/cursos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosServiceService]
  // se o provider for adicionado no component entao cada um tera uma instancia unica do serviço
})
export class CriarCursoComponent implements OnInit {

  cursos: string [];

  onAddCurso(add) {
    this.CursosService.addCurso(add);
  }

  // add a intancia de cursoservice ao component
  constructor(private CursosService: CursosServiceService) { }

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();
  }
}
