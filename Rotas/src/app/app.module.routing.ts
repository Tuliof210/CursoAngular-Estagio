import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guard/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'cursos', canActivate: [AuthGuard], loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos', canActivate: [AuthGuard], loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)},
  { path: '', component: HomeComponent },
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
