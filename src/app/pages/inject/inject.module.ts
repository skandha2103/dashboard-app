import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectContainerComponent } from './components/inject-container/inject-container.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { LoggerService } from 'src/app/services/logger.service';
import { ClientLoggerService } from 'src/app/services/client-logger.service';
import { UseclassComponent } from './components/useclass/useclass.component';
import { UseexistingComponent } from './components/useexisting/useexisting.component';
import { UsevalueComponent } from './components/usevalue/usevalue.component';
import { Config, LogType } from 'src/app/models/config';
import { loggerServiceFactory } from 'src/app/services/logger.service.provider';
import { MultioptionComponent } from './components/multioption/multioption.component';

const routes: Routes = [
  {
    path: '',
    component: InjectContainerComponent,
    pathMatch: 'full',
  },
];

export const config = {
  apiUrl: 'http://localhost:3000',
  logType: LogType.Client,
};

@NgModule({
  declarations: [
    InjectContainerComponent,
    UseclassComponent,
    UseexistingComponent,
    UsevalueComponent,
    MultioptionComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatTabsModule],
  providers: [
    // { provide: LoggerService, useClass: LoggerService }, // case 1
    // { provide: LoggerService, useClass: ClientLoggerService }, // case 2

    // case 3: when we are making use of the same class, but different token
    // { provide: LoggerService, useClass: ClientLoggerService },
    // { provide: ClientLoggerService, useClass: ClientLoggerService },
    // This will create two instances of client logger service
    // But only thing you wanted is to create an alias name for logger service
    // In these cases useExisting

    // { provide: LoggerService, useClass: ClientLoggerService },
    { provide: ClientLoggerService, useExisting: LoggerService },

    // you are providing the token name to useexisting
    // this will create only a single instance

    // case 4
    { provide: Config, useValue: config }, // Config is injection token
    // now we can use this config in the component

    // case 5
    {
      provide: LoggerService,
      useFactory: loggerServiceFactory,
      deps: [Config], // order is important if multiple input params
    },

    // case 6: multi option (usually used in interceptors)
    // { provide: LoggerService, useClass: LoggerService, multi: true },
    // { provide: LoggerService, useClass: ClientLoggerService, multi: true },
    // injects array of services
    // define multiple classes which makes use of same DI token
    // implement single interface for all your classes
  ],
})
export class InjectModule {}
