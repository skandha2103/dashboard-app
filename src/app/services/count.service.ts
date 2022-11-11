import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {

  count = 5;

  constructor() {}

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
}