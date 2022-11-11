import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './components/user-table/user-table.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from 'src/app/store/users/users.effects';
import { usersReducer } from 'src/app/store/users/users.reducer';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path:'',
    component: UserTableComponent,
    // pathMatch:'full',
  },
  {
    path:':id',
    component: UserDetailsComponent,
  },
]

@NgModule({
  declarations: [
    UserTableComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('usersFeature', usersReducer), 
    EffectsModule.forFeature([UsersEffects]) 
  ]
})

export class StateManagementModule { }
