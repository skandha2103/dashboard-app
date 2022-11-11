import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorouteLazymoduleComponent } from './noroute-lazymodule.component';

describe('NorouteLazymoduleComponent', () => {
  let component: NorouteLazymoduleComponent;
  let fixture: ComponentFixture<NorouteLazymoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorouteLazymoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NorouteLazymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
