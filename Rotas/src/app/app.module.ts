import { CursosService } from './cursos/cursos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';

import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
