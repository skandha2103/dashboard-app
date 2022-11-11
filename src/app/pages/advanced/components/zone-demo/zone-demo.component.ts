import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-zone-demo',
  templateUrl: './zone-demo.component.html',
  styleUrls: ['./zone-demo.component.scss'],
})
export class ZoneDemoComponent implements DoCheck, OnInit, AfterViewInit {
  style!: { 'background-color': string };

  constructor(
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private element: ElementRef
  ) {}

  ngOnInit(): void {
    this.ngZone.onUnstable.subscribe(() => {
      console.log('zone became unstable');
    });
    this.ngZone.onStable.subscribe(() => {
      console.log('zone became stable');
      console.log('********************');
    });
    this.ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('No more micro tasks');
    });
    this.ngZone.onError.subscribe((err) => {
      console.log('Error encountered in zone', err);
    });
    console.log('Normal 1');
    setTimeout(() => {
      console.log('setTimeout 1');
      Promise.resolve().then(() => {
        console.log('Promise 2');
      });
    });
    setTimeout(() => {
      console.log('setTimeout 2');
    });
    Promise.resolve().then(() => {
      console.log('Promise 1');
    });
    requestAnimationFrame(() => {
      console.log('Animation 1');
    });
    requestAnimationFrame(() => {
      console.log('Animation 2');
    });
  }

  ngAfterViewInit(): void {
    // this.ngZone.runOutsideAngular(() => {
    //   this.renderer.listen(
    //     this.element.nativeElement,
    //     'click',
    //     this.repaint.bind(this)
    //   );
    // });
  }

  ngDoCheck(): void {
    console.log('do check');
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  repaint() {
    // console.log('outside run ', NgZone.isInAngularZone());
    // this.ngZone.runOutsideAngular(() => { // remove click event from html case 1
    // this.ngZone.runTask(() => { case 2 disble click events, and use run, it will perform change detection even though it is disables
      this.style = { 'background-color': this.getRandomColor() };
      // this.element.nativeElement.test.name = 1;
      console.log('inside run ', NgZone.isInAngularZone());
    // });
    // Use runGuarded or runTask to catch any error
  }

  paint() { // change detection can run twice for same event (multiple dom elements listening to same event). We can merge two handlers in main.ts add { ngZoneEventCoalescingL true }
    console.log('inside paint ', NgZone.isInAngularZone());
  }
}
