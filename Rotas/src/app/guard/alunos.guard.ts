import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda aluno', route, state);

    if (state.url.includes('editar')) {

      return true;
    }

    return true;
  }
}
