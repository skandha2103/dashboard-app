import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  myData: number[] = [];
  subject = new Subject();
  // subject = new BehaviorSubject(100);
  // subject = new ReplaySubject(2);

  constructor() { }

  ngOnInit(): void {
  }

  emitData(){
    this.subject.next(1);
    console.log(1);
    setTimeout(()=>{
      this.subject.next(2);
      console.log(2);
    },2000);
    setTimeout(()=>{
      this.subject.next(3);
      console.log(3);
    },4000);
    setTimeout(()=>{
      this.subject.next(4);
      console.log(4);
    },6000);
    setTimeout(()=>{
      this.subject.next(5);
      console.log(5);
    },8000);
  }

  getData(){
    console.log("Subscribed");
    this.subject.subscribe((data:any) => {
      this.myData.push(data);
    })
  }

}
