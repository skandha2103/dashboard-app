import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-second-product',
  templateUrl: './second-product.component.html',
  styleUrls: ['./second-product.component.scss']
})
export class SecondProductComponent implements OnInit {

  count = 0;

  constructor(private sharedService: CountService) {}

  ngOnInit(): void {
    this.count = this.sharedService.count;
  }

  increase() {
    this.sharedService.increaseCount();
    this.count = this.sharedService.count;
  }

  decrease() {
    this.sharedService.decreaseCount();
    this.count = this.sharedService.count;
  }
}
