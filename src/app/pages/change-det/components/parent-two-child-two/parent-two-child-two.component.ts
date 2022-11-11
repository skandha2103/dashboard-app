import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-two-child-two',
  templateUrl: './parent-two-child-two.component.html',
  styleUrls: ['./parent-two-child-two.component.scss']
})
export class ParentTwoChildTwoComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log("Parent Two Child Two component change detection");
  }

  onClick() {}

}
