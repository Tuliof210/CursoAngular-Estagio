
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgswitchModule } from './diretiva-ngswitch/diretiva-ngswitch.module';

import { ModalModule } from 'ngx-bootstrap/modal';
import { DiretivaNgforModule } from './diretiva-ngfor/diretiva-ngfor.module';
import { DiretivaNgstyleModule } from './diretiva-ngstyle/diretiva-ngstyle.module';

@NgModule({
  declarations: [
    AppComponent
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
