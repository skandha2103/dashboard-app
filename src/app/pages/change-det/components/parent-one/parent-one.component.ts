import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss']
})
export class ParentOneComponent implements OnInit, DoCheck {

  strArrInParent: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log("Parent One component change detection");
  }

  onClick() {
    this.strArrInParent.push("Message from parent one");
  }

}
