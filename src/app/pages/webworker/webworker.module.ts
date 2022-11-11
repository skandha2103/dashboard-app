import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerContainerComponent } from './worker-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: WorkerContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    WorkerContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WebworkerModule { }
