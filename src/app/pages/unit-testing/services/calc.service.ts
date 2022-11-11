import { Injectable } from '@angular/core';
import { LogrService } from './logr.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private loggerService: LogrService) {}

  add(n1: number, n2: number) {
    let result = n1 + n2;
    this.loggerService.log('Add Operation is called');
    return result;
  }

  subtract(n1: number, n2: number) {
    let result = n1 - n2;
    this.loggerService.log('Subtract Operation is called');
    return result;
  }
}
