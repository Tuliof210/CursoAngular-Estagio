import { Component, OnInit } from '@angular/core';

import { User } from './user';

import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  // Get/Set Properties in Ts
  // tslint:disable-next-line: variable-name
  private _usuario: User = new User();
  get usuario(): User {
    return this._usuario;
  }
  set usuario(user: User) {
    this._usuario = user;
  }

  doLogin() {
    this.auth.authLogin(this.usuario);
    console.log(this._usuario);
  }

  ngOnInit(): void {
  }

}
