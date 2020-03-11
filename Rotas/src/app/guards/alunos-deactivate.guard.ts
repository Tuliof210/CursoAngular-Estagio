import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

import { IFormDeactivate } from './iform-deactivate.ts';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormDeactivate> {

    canDeactivate(
      component: IFormDeactivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log(component.podeDesativar());
        return component.podeDesativar();
  }
}
