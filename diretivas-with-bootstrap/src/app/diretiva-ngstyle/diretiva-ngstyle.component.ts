import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = true;
  tamanhoFonte: number = 25;

  Change() {
    this.ativo = !this.ativo;
    this.tamanhoFonte = this.tamanhoFonte === 15 ? 20 : 15;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
