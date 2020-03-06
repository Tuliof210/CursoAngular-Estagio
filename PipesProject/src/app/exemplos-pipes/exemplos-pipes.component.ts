import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms',
    rating: 4.54321,
    numPages: 314,
    price: 44.99,
    dataLancamento: new Date(2016, 5, 23), // mes 0 == janeiro, mes 11 ==  dezembro
    url: 'http://a.co/glqjpRP'
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.livro);
  }
}
