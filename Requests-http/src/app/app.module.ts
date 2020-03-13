import { SharedModule } from './shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    SharedModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
