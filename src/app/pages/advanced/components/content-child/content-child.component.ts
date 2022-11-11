import { Component, ContentChild, ContentChildren, ElementRef, Input, OnInit } from '@angular/core';
import { Prod } from 'src/app/models/prod';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss'],
})
export class ContentChildComponent implements OnInit {

  @Input() products:Prod[]=[];
  @ContentChild("head") contentHeader!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // console.log(this.products)
  }

  ngAfterContentInit(){
    this.contentHeader.nativeElement.setAttribute('style','color:red');
  }

}
