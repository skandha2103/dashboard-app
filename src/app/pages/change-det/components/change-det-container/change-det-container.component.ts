import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-det-container',
  templateUrl: './change-det-container.component.html',
  styleUrls: ['./change-det-container.component.scss']
})
export class ChangeDetContainerComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    // console.log("Angular is checking for changes");
    console.log("Root component change detection");
  }

  onClick(){
    
  }

  // Theory:
  // Change detection in angular makes sure that data in component and view are always in sync with each other
  // Every component has a change detector that reads the binding on the template and makes sure data and view are in sync
  // ngDoCheck -> to verify something on every change detection cycle
  // ngZone is informing angular to check for changes
  // 1. events like - click, submit, mouseover, etc
  // 2. Async functions like setInterval, setTimeout
  // 3. API request is invoked
  // Change detection is run from top to bottom in the component tree
  


}
