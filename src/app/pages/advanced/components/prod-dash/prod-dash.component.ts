import { Component, OnInit } from '@angular/core';
import { Prod } from 'src/app/models/prod';

@Component({
  selector: 'app-prod-dash',
  templateUrl: './prod-dash.component.html',
  styleUrls: ['./prod-dash.component.scss']
})
export class ProdDashComponent implements OnInit {

  public salesProducts: Prod[] = [
    { id: 1, name: 'Acs', price: '100' },
    { id: 2, name: 'Phones', price: '2000' },
    { id: 3, name: 'Fashion', price: '5000' },
    { id: 4, name: 'Electronics', price: '3000' },
  ];

  public topProducts: Prod[] = [
    { id: 1, name: 'Phone', price: '2000' },
    { id: 2, name: 'Laptop', price: '6000' },
    { id: 3, name: 'Decor', price: '12000' },
    { id: 4, name: 'Electronics', price: '33000' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
