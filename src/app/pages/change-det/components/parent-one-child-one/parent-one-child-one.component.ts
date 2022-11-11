import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one-child-one',
  templateUrl: './parent-one-child-one.component.html',
  styleUrls: ['./parent-one-child-one.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // Dont detect changes from the parent
  // Reduce number of checks for this component and its sub tree
})
export class ParentOneChildOneComponent implements OnInit, DoCheck {

  @Input()
  myStrArr: any[] = [];
  
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    // console.log(this.myStrArr);
    // this.cd.detectChanges();
    console.log("Parent One Child One component change detection");
  }

  onClick() {
    this.myStrArr.push("child 1 click");
  }

}
