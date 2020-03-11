import { Injectable } from "@angular/core";

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";

import { Aluno } from './../alunos/aluno';
import { AlunosService } from './../alunos/alunos.service';


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(private alunoService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {

      // tslint:disable-next-line: prefer-const no-string-literal
      let id = route.params['id'];

      return this.alunoService.getAluno(id);
  }
}
