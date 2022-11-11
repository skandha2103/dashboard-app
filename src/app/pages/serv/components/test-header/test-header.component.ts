import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.goToHome()
  }

  goToHome() {
    this.router.navigate(['dashboard/services/home']);
  }

  goToFirstUser() {
    this.router.navigate(['dashboard/services/user/first']);
  }

  goToSecondUser() {
    this.router.navigate(['dashboard/services/user/second']);
  }

  goToFirstProduct() {
    this.router.navigate(['dashboard/services/product/first']);
  }

  goToSecondProduct() {
    this.router.navigate(['dashboard/services/product/second']);
  }
}