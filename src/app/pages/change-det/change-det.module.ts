import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetContainerComponent } from './components/change-det-container/change-det-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentOneComponent } from './components/parent-one/parent-one.component';
import { ParentOneChildOneComponent } from './components/parent-one-child-one/parent-one-child-one.component';
import { ParentOneChildTwoComponent } from './components/parent-one-child-two/parent-one-child-two.component';
import { ParentTwoComponent } from './components/parent-two/parent-two.component';
import { ParentTwoChildOneComponent } from './components/parent-two-child-one/parent-two-child-one.component';
import { ParentTwoChildTwoComponent } from './components/parent-two-child-two/parent-two-child-two.component';

const routes: Routes = [
  {
    path:'',
    component: ChangeDetContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    ChangeDetContainerComponent,
    ParentOneComponent,
    ParentOneChildOneComponent,
    ParentOneChildTwoComponent,
    ParentTwoComponent,
    ParentTwoChildOneComponent,
    ParentTwoChildTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChangeDetModule { }
