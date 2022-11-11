import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirContainerComponent } from './components/dir-container/dir-container.component';
import { RouterModule, Routes } from '@angular/router';
import { HighlightColorDirective } from './directives/highlight-color.directive';

const routes: Routes = [
  {
    path:'',
    component: DirContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    DirContainerComponent,
    HighlightColorDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirModule { }
