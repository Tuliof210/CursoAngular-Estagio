import { AuthService } from './../../login/auth.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService,
    private authService: AuthService
  ) { }

  aluno: any;
  inscricao: Subscription;

  mostrarBotao: boolean = false;

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });

    this.authService.showMenuEmitter.subscribe(mostrar => this.mostrarBotao = mostrar);
    console.log(this.mostrarBotao);

  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.authService.showMenuEmitter.unsubscribe();
    this.inscricao.unsubscribe();
  }
}
