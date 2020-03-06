import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  print(msg: string) {
    console.log(msg);
  }
}
