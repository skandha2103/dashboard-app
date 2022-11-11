import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangComponent } from './components/lang/lang.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LangComponent,
    pathMatch:'full'
  },
];

@NgModule({
  declarations: [
    LangComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InternationalizationModule { }
