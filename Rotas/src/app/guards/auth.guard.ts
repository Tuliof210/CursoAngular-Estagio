import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificasAcesso();
  }

  private verificasAcesso() {
    if (this.auth.Autenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log('canload');

    return this.verificasAcesso();
  }

}
