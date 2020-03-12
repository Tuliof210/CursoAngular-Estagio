import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root' // nao é necessario add nos providers
})
export class CursosService {

  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000/cursos';

  list() {
    return this.http.get<Curso[]>(this.API);
  }
}
