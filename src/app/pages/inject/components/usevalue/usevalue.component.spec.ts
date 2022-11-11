import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsevalueComponent } from './usevalue.component';

describe('UsevalueComponent', () => {
  let component: UsevalueComponent;
  let fixture: ComponentFixture<UsevalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsevalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsevalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
