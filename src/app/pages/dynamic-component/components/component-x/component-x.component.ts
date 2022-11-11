import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.scss']
})
export class ComponentXComponent implements OnInit {

  @Input() name:string = '';
  @Output() closed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closed.emit({
      name: this.name
    })
  }

}
