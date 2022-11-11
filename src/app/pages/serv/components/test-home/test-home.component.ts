import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.scss']
})

export class TestHomeComponent implements OnInit {

  count = 0;

  constructor(private countService: CountService) {}

  ngOnInit(): void {
    this.count = this.countService.count;
  }

  increase() {
    this.countService.increaseCount();
    this.count = this.countService.count;
  }

  decrease() {
    this.countService.decreaseCount();
    this.count = this.countService.count;
  }

}
