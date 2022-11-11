import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component: ReactiveFormsComponent
  }
]


@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormModule { }
