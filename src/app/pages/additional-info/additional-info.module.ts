import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalCompComponent } from './components/additional-comp/additional-comp.component';



@NgModule({
  declarations: [
    AdditionalCompComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdditionalInfoModule {
  getComponent(){
    return AdditionalCompComponent;
  }
 }
