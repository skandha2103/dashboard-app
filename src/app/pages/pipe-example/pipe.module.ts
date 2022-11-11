import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchPipe } from './pipes/search.pipe';
import { EmployeeDataComponent } from './components/employee-data/employee-data.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeDataComponent
  }
]


@NgModule({
  declarations: [
    SearchPipe,
    EmployeeDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class PipeModule { }
