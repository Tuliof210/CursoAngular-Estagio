import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  coisas: string[] = ['cell', 'caneta', 'caderno', 'mao', 'notebook'];

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (let i in this.coisas) {
      let coisa = this.coisas[i];
    }
  }

}
