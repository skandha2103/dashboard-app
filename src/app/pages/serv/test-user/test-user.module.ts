import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstUserComponent } from './first-user/first-user.component';
import { SecondUserComponent } from './second-user/second-user.component';
import { RouterModule, Routes } from '@angular/router';
import { CountService } from 'src/app/services/count.service';

const routes: Routes = [
  { path: 'first', component: FirstUserComponent },
  { path: 'second', component: SecondUserComponent },
];

@NgModule({
  declarations: [
    FirstUserComponent,
    SecondUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [CountService]
})
export class TestUserModule { }
