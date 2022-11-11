import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridContainerComponent } from './components/ag-grid-container/ag-grid-container.component';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

const routes: Routes = [
  {
    path:'',
    component: AgGridContainerComponent,
    pathMatch: 'full'
  }
]


@NgModule({
  declarations: [
    AgGridContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule
  ]
})
export class AgGridTutorialModule { }
