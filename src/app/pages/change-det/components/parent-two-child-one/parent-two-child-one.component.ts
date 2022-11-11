import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-one',
  templateUrl: './parent-two-child-one.component.html',
  styleUrls: ['./parent-two-child-one.component.scss']
})
export class ParentTwoChildOneComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log("Parent Two Child One component change detection");
  }

  onClick() {}

}
