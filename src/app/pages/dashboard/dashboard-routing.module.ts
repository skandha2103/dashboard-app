import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
        path: 'directives',
        loadChildren: () =>
          import('../dir/dir.module').then(
            (m) => m.DirModule
          ),
      }, 
      {
        path: 'pipe',
        loadChildren: () =>
          import('../pipe-example/pipe.module').then(
            (m) => m.PipeModule
          ),
      }, 
      {
        path: 'services',
        loadChildren: () =>
          import('../serv/serv.module').then(
            (m) => m.ServModule
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('../form/form.module').then(
            (m) => m.FormModule
          ),
      },
      {
        path: 'lazyLoad',
        loadChildren: () =>
          import('../lazy-load/lazy-load.module').then(
            (m) => m.LazyLoadModule
          ),
      },
      {
        path: 'dynamicComponent',
        loadChildren: () =>
          import('../dynamic-component/dynamic-component.module').then(
            (m) => m.DynamicComponentModule
          ),
      },
      {
        path: 'injectors',
        loadChildren: () =>
          import('../inject/inject.module').then(
            (m) => m.InjectModule
          ),
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import('../rxjs/rxjs.module').then(
            (m) => m.RxjsModule
          ),
      },
      {
        path: 'stateManagement',
        loadChildren: () =>
          import('../state-management/state-management.module').then(
            (m) => m.StateManagementModule
          ),
      },
      {
        path: 'changeDet',
        loadChildren: () =>
          import('../change-det/change-det.module').then(
            (m) => m.ChangeDetModule
          ),
      },
      {
        path: 'trackBy',
        loadChildren: () =>
          import('../track-by/track-by.module').then(
            (m) => m.TrackByModule
          ),
      },
      {
        path: 'internationalization',
        loadChildren: () =>
          import('../internationalization/internationalization.module').then(
            (m) => m.InternationalizationModule
          ),
      },
      {
        path: 'advanced',
        loadChildren: () =>
          import('../advanced/advanced.module').then(
            (m) => m.AdvancedModule
          ),
      },
      {
        path: 'standalone',
        loadChildren: () =>
          import('../standalone/standalone.module').then(
            (m) => m.StandaloneModule
          ),
      },
      {
        path: 'agGrid',
        loadChildren: () =>
          import('../ag-grid/ag-grid.module').then(
            (m) => m.AgGridTutorialModule
          ),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../library/library.module').then(
            (m) => m.LibraryModule
          ),
      },
      {
        path: 'webworker',
        loadChildren: () =>
          import('../webworker/webworker.module').then(
            (m) => m.WebworkerModule
          ),
      },
      {
        path: 'memoryleak',
        loadChildren: () =>
          import('../memory-leaks/memory-leaks.module').then(
            (m) => m.MemoryLeaksModule
          ),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
