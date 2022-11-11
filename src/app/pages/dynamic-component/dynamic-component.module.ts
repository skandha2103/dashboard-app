import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContainerComponent } from './components/dynamic-container/dynamic-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentXComponent } from './components/component-x/component-x.component';
import { ComponentYComponent } from './components/component-y/component-y.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicContainerComponent,
    pathMatch:'full'
  },
];

@NgModule({
  declarations: [
    DynamicContainerComponent,
    ComponentXComponent,
    ComponentYComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DynamicComponentModule { }
