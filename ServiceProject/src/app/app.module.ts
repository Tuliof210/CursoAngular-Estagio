import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { CursosServiceService } from './shared/services/cursos-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // tslint:disable-next-line: max-line-length
  providers: [], // se o provider for declarado em modulo ele uma instancia unica que ser vista por todos os components e submodulos desse modulo
  bootstrap: [AppComponent]
})
export class AppModule { }
