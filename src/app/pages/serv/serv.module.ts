import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServContainerComponent } from './components/serv-container/serv-container.component';
import { RouterModule, Routes } from '@angular/router';
import { TestHeaderComponent } from './components/test-header/test-header.component';
import { TestHomeComponent } from './components/test-home/test-home.component';

const routes: Routes = [
  {
    path: '',
    component: ServContainerComponent,
    children: [
      { path: 'home', component: TestHomeComponent },
      {
        path: 'user',
        loadChildren: () =>
          import('./test-user/test-user.module').then((m) => m.TestUserModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./test-product/test-product.module').then(
            (m) => m.TestProductModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    ServContainerComponent,
    TestHeaderComponent,
    TestHomeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ServModule {}
