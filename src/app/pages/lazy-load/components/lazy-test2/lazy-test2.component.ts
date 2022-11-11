import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-test2',
  templateUrl: './lazy-test2.component.html',
  styleUrls: ['./lazy-test2.component.scss']
})
export class LazyTest2Component implements OnInit {

  title:string = 'Lazy test 2 loaded'; 
  constructor() { }

  ngOnInit(): void {
  }

}
