import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Injectable } from '@angular/core';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modal: BsModalService) { }

  private showAlert(m: string, t: AlertTypes) {
    const bsModalRef: BsModalRef = this.modal.show(AlertModalComponent);
    bsModalRef.content.type = t;
    bsModalRef.content.message = m;
  }

  showSuccess(m: string) {
    this.showAlert(m, AlertTypes.SUCCESS);
  }

  showDanger(m: string) {
    this.showAlert(m, AlertTypes.DANGER);
  }
}
