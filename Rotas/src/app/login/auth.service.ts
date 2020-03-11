import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  private usuarioAutenticado: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  authLogin(usuario: User) {
    if (usuario.nome === 'usuario' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['cursos']);

    } else {
      this.usuarioAutenticado = false;

      this.showMenuEmitter.emit(false);

      this.router.navigate(['/']);
    }
  }

  Autenticado() {
    return this.usuarioAutenticado;
  }
}
