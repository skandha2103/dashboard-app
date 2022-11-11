import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-container',
  templateUrl: './memory-container.component.html',
  styleUrls: ['./memory-container.component.scss']
})
export class MemoryContainerComponent implements OnInit {

  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisible(){
    this.isVisible = !this.isVisible;
  }

}
