import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadCompoenetsComponent } from './components/lazy-load-compoenets/lazy-load-compoenets.component';
// import { LazyTest1Component } from './components/lazy-test1/lazy-test1.component';
// import { LazyTest2Component } from './components/lazy-test2/lazy-test2.component';
import { RouterModule, Routes } from '@angular/router';
import { NorouteLazymoduleComponent } from './components/noroute-lazymodule/noroute-lazymodule.component';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadCompoenetsComponent,
    pathMatch:'full'
  },
];


@NgModule({
  declarations: [
    LazyLoadCompoenetsComponent,
    NorouteLazymoduleComponent,
    // LazyTest1Component,
    // LazyTest2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyLoadModule { }
