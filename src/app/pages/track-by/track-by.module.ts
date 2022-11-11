import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HeaderCompComponent } from './components/header-comp/header-comp.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    FilterPipe,
    ProductsComponent,
    HeaderCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class TrackByModule { }
