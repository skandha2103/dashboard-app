import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogsListComponent } from './components/dogs-list.component';

const routes: Routes = [
  { path: '', component: DogsListComponent, pathMatch: 'full' },
  {
    path: ':index',
    loadComponent: () =>
      import('./components/dogs-view.component').then((m) => m.DogsViewComponent),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StandaloneModule {}
