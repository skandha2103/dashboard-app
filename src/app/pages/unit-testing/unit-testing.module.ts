import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingContainerComponent } from './components/testing-container/testing-container.component';
import { RouterModule, Routes } from '@angular/router';
import { StrengthPipe } from './pipes/strength.pipe';

const routes: Routes = [
  {
    path:'',
    component: TestingContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    TestingContainerComponent,
    StrengthPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnitTestingModule { }
