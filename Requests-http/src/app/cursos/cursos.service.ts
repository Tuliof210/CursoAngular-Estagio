import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { delay, tap, catchError, take } from 'rxjs/operators';

import { Curso } from './curso';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' // nao é necessario add nos providers
})
export class CursosService {

  constructor(private http: HttpClient) {}

  private readonly API = `${environment.API}cursos`;

  list() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1000), tap(console.log) // gera um atraso de x milisegundos para renderizar
    );
  }

  loadById(id) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1)); // ira escutar/ir ao servidor apenas uma vez
  }

  create(curso) {
    return this.http.post(this.API, curso).pipe(take(1));
  }
}
