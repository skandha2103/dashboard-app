import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryContainerComponent } from './components/library-container/library-container.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule } from 'weather';

const routes: Routes = [
  {
    path:'',
    component: LibraryContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    LibraryContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WeatherModule
  ]
})
export class LibraryModule { }
