import { Component, OnInit } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-first-product',
  templateUrl: './first-product.component.html',
  styleUrls: ['./first-product.component.scss'],
  providers: [CountService]
})
export class FirstProductComponent implements OnInit {

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
