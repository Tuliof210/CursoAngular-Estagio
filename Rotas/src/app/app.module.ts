import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

import { Routing } from './app.routing';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoencontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
