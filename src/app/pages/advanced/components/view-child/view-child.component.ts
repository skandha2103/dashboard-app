import { AfterViewInit, ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

   // @ViewChild("highlight")marker:ElementRef;
  @ViewChildren("highlight") marker!: QueryList<any>;

  @ViewChild('childView') child: CounterComponent | undefined;

  constructor(private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // console.log(this.child);
    // console.log(this.marker.length);
    this.marker.first.nativeElement.style.color="red";
    this.marker.last.nativeElement.style.color="green";
    this.cdref.detectChanges(); //?
  }

  inc(){
    if(this.child)
      this.child.increment();
  }

  dec(){
    if(this.child)
      this.child.decrement();
  }

}
