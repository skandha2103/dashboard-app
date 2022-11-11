import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsContainerComponent } from './components/rxjs-container/rxjs-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MappingComponent } from './components/mapping/mapping.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RedditSearchComponent } from './components/reddit-search/reddit-search.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
  {
    path:'',
    component: RxjsContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    RxjsContainerComponent,
    MappingComponent,
    SubjectsComponent,
    RedditSearchComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    FormsModule
  ]
})

export class RxjsModule { }
