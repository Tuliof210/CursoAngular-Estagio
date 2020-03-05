
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';

import { DiretivaNgswitchModule } from './diretiva-ngswitch/diretiva-ngswitch.module';
import { DiretivaNgforModule } from './diretiva-ngfor/diretiva-ngfor.module';
import { DiretivaNgstyleModule } from './diretiva-ngstyle/diretiva-ngstyle.module';

import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { ExemploNgcontentComponent } from './exemplo-ngcontent/exemplo-ngcontent.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';

import { FundoAmareloDirective } from './mydirectives/fundo-amarelo.directive';
import { HighlightMouseDirective } from './mydirectives/highlight-mouse.directive';
import { HighlightDirective } from './mydirectives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    OperadorElvisComponent,
    ExemploNgcontentComponent,
    FundoAmareloDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DiretivaNgswitchModule,
    DiretivaNgforModule,
    DiretivaNgstyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
