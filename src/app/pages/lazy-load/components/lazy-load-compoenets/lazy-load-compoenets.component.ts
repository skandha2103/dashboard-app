import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-lazy-load-compoenets',
  templateUrl: './lazy-load-compoenets.component.html',
  styleUrls: ['./lazy-load-compoenets.component.scss']
})
export class LazyLoadCompoenetsComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  constructor(private viewConRef: ViewContainerRef) { }
  // ViewContainerRef creates a container to place lazy loaded component
  // ComponentFactoryResolver make compoenent from core

  ngOnInit(): void {
  }

  // If there are 200 components, not all needed to be loaded. To make it faster we only call on some button click, event
  
  // In Angular 13 the new API removes the need for ComponentFactoryResolver being injected into the constructor
  // Now to dynamically create a component you have to use ViewContainerRef.createComponent without using the factory.

  // async await because it will generate promise
  // async loadMobile(){    
  //   this.viewConRef.clear();
  //   const {MobileComponent} = await import('../mobile/mobile.component');
  //   this.viewConRef.createComponent(MobileComponent);
  // }

  // async loadLaptop(){
  //   this.viewConRef.clear();
  //   const {LaptopComponent} = await import('../laptop/laptop.component');
  //   this.viewConRef.createComponent(LaptopComponent);
  // }

  // the drawback of doing this way is you cannot use anything in Common module 

  
  loadTest1(){
    this.container.clear();
    import('../lazy-test1/lazy-test1.component').then((module)=>{
      const component = module['LazyTest1Component']
      this.container.createComponent(component)
    })
  }

  loadTest2(){
    this.container.clear();
    import('../lazy-test2/lazy-test2.component').then((module)=>{
      const component = module['LazyTest2Component']
      this.container.createComponent(component)
    })
  }
}
