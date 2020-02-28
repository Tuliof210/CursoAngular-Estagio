import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlIMG = 'https://i.picsum.photos/id/88/200/300.jpg';
  urlIMG2 = 'https://i.picsum.photos/id/1016/200/200.jpg';

  getVal() { return 4; }

  constructor() { }

  ngOnInit(): void {
  }

}
