import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-test1',
  templateUrl: './lazy-test1.component.html',
  styleUrls: ['./lazy-test1.component.scss']
})
export class LazyTest1Component implements OnInit {

  title:string = 'Lazy test 1 loaded';
  constructor() { }

  ngOnInit(): void {
  }

}
