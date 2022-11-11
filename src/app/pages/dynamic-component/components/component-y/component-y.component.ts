import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.scss']
})
export class ComponentYComponent implements OnInit {

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
