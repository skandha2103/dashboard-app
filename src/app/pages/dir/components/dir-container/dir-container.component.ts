import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-container',
  templateUrl: './dir-container.component.html',
  styleUrls: ['./dir-container.component.scss']
})
export class DirContainerComponent implements OnInit {

  constructor() { }

  color:string="";
  
  ngOnInit(): void {
  }

}
