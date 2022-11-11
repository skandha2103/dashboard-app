import { Component, createNgModule, Injector, NgModuleRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-noroute-lazymodule',
  templateUrl: './noroute-lazymodule.component.html',
  styleUrls: ['./noroute-lazymodule.component.scss']
})
export class NorouteLazymoduleComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;
  showInfo = false;

  constructor(private injector: Injector) { }

  ngOnInit(): void {
  }

  loadLazyModule(){
    // always static string is required, if we assign it to a variable path and try, we get an error
    import('../../../additional-info/additional-info.module').then((module)=>{
      const lazymodule = module['AdditionalInfoModule'];
      let moduleRef: NgModuleRef<any>;
      moduleRef = createNgModule(lazymodule, this.injector);
      // In angular 14, we have to use createNgModuleRef
      // In angular 12, we have to use Compiler (import in constructor). These are deprecated
      // const moduleFactory = this.compiler.compileModuleSync(lazymodule)
      // moduleRef = moduleFactory.create(this.injector)
      const component = moduleRef.instance.getComponent();
      this.container.createComponent(component,{ ngModuleRef: moduleRef }) 
      // by adding second param, dependencies defined within module becomes available
      // Also in angular 12, createComponent does not take component, you need ComponentFactoryResolver
    })
  }
}
