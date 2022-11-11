import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {

  // totalItems:number = 0;
  searchTerm:string="";
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe((res:any)=>{
    //   this.totalItems=res.length;
    //   this.totalItems = this.cartService.getProductCount();
    // })
  }

  onSearch(){
    this.cartService.search.next(this.searchTerm);
  }
}
