import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiretivaNgswitchModule } from './diretiva-ngswitch/diretiva-ngswitch.module';

import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    DiretivaNgswitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
