import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleChildComponent } from './toggle-child.component';

describe('ToggleChildComponent', () => {
  let component: ToggleChildComponent;
  let fixture: ComponentFixture<ToggleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
