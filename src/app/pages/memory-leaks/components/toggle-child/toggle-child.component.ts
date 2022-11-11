import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-toggle-child',
  templateUrl: './toggle-child.component.html',
  styleUrls: ['./toggle-child.component.scss']
})
export class ToggleChildComponent implements OnInit, OnDestroy {

  dataRecieved: number[][]=[];
  private sub: Subscription | undefined;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sub = this.sharedService.broadCast$.subscribe((data)=>{
      this.dataRecieved.push(data);
    })
  }

  ngOnDestroy(): void {
    // this.sub?.unsubscribe();
  }

}
