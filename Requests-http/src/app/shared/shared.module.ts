import { AlertModalService } from './alert-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent],
  providers: [AlertModalService]
})
export class SharedModule { }
