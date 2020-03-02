import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular = true;
  urlIMG = 'https://i.picsum.photos/id/88/200/300.jpg';
  urlIMG2 = 'https://i.picsum.photos/id/1016/200/200.jpg';

  getVal() { return 4; }

  clicked() {
    alert('AAAAAAAAAAA');
  }

  // tslint:disable-next-line: member-ordering
  valoratual = '';

  OnKeyUp(e: KeyboardEvent) {
    this.valoratual = (e.target as HTMLInputElement).value;
    console.log((e.target as HTMLInputElement).value); // retorna o valor digitado dinamicamente
  }

  // tslint:disable-next-line: member-ordering
  name = 'tulio';

  // tslint:disable-next-line: member-ordering
  pessoa = {
    nome: 'Carlos',
    idade: 19
  };


  constructor() { }

  ngOnInit(): void {
  }

}
