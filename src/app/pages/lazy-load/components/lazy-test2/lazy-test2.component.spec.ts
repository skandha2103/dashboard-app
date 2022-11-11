import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTest2Component } from './lazy-test2.component';

describe('LazyTest2Component', () => {
  let component: LazyTest2Component;
  let fixture: ComponentFixture<LazyTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyTest2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
