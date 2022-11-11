import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-two',
  templateUrl: './parent-one-child-two.component.html',
  styleUrls: ['./parent-one-child-two.component.scss']
})
export class ParentOneChildTwoComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log("Parent One Child Two component change detection");
  }

  onClick() {}

}
