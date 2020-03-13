import { Component, OnInit, Input } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  @Input() type: string = 'success';
  @Input() message: string = '';

  ngOnInit(): void {
  }

  onClose() {
    this.bsModalRef.hide();
  }
}
