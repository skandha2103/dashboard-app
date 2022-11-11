import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryContainerComponent } from './components/memory-container/memory-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ToggleChildComponent } from './components/toggle-child/toggle-child.component';

const routes: Routes = [
  {
    path:'',
    component: MemoryContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    MemoryContainerComponent,
    ToggleChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemoryLeaksModule { }
