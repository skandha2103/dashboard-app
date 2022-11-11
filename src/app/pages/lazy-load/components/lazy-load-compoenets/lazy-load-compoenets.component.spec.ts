import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadCompoenetsComponent } from './lazy-load-compoenets.component';

describe('LazyLoadCompoenetsComponent', () => {
  let component: LazyLoadCompoenetsComponent;
  let fixture: ComponentFixture<LazyLoadCompoenetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadCompoenetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadCompoenetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
