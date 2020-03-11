import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app.module.routing';

import { FormsModule } from '@angular/forms';

import { AuthService } from './login/auth.service';

import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunoDetalheResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
