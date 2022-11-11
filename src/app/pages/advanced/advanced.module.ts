import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedContainerComponent } from './components/advanced-container/advanced-container.component';
import { ZoneDemoComponent } from './components/zone-demo/zone-demo.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProdDashComponent } from './components/prod-dash/prod-dash.component';

const routes: Routes = [
  {
    path:'',
    component: AdvancedContainerComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    ContentChildComponent,
    AdvancedContainerComponent,
    ZoneDemoComponent,
    ViewChildComponent,
    CounterComponent,
    ProdDashComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class AdvancedModule { }
