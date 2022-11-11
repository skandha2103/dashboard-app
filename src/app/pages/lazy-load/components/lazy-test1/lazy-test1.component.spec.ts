import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTest1Component } from './lazy-test1.component';

describe('LazyTest1Component', () => {
  let component: LazyTest1Component;
  let fixture: ComponentFixture<LazyTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyTest1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
