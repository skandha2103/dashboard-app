import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private broadcastSub = new Subject<number[]>();
  broadCast$ = this.broadcastSub.asObservable();
  constructor() { 
    interval(200).subscribe(()=>{
      const arr = [];
      for(let i=0; i<10000;i++){
        arr.push(Math.random());
      }
      this.broadcastSub.next(arr);
    })
  }
}
