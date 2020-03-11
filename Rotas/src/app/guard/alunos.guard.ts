import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable()
export class AlunosGuard implements CanActivateChild {

  showBotaoEmitter = new EventEmitter<boolean>();

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('guarda aluno', route, state);

    if (state.url.includes('editar')) {

      this.showBotaoEmitter.emit(false);

      return false;
    }

    return true;
  }
}
