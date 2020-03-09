import { CursoNaoencontradoComponent } from './curso-naoencontrado/curso-naoencontrado.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'notFound', component: CursoNaoencontradoComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
