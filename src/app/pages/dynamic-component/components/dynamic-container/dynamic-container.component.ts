import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentXComponent } from '../component-x/component-x.component';
import { ComponentYComponent } from '../component-y/component-y.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;
  
  components = new Map<string, ComponentRef<any>>();
  index:number = 0;

  componentNames: any = {
    componentX: 'componentX',
    componentY: 'componentY'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createComponent(componentName: string){
    // this.container.clear();
    const componentType = this.getComponentType(componentName)
    let uniqueName = componentName + '-' + this.index.toString();
    const component = this.container.createComponent(componentType)
    component.instance.name = uniqueName; // for input, instead of square brackets

    component.instance.closed.subscribe((res:any)=>{ // subscribe output property
        this.deleteComponent(res.name)
    })
    this.components.set(uniqueName, component)
    this.index++;
  }

  deleteComponent(componentName: string){
    if(this.components.has(componentName)){
      this.components.get(componentName)?.destroy(); // delete compoenet
      this.components.delete(componentName); // delete property
    }
  }

  getComponentType(name: string): Type<any>{
    let type: Type<any> = ComponentXComponent;
    switch(name){
      case this.componentNames.componentX:{
        type = ComponentXComponent;
        break;
      }
      case this.componentNames.componentY:{
        type = ComponentYComponent;
        break;
      }
    }
    return type;
  }

}
