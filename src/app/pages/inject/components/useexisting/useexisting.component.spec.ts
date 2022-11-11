import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseexistingComponent } from './useexisting.component';

describe('UseexistingComponent', () => {
  let component: UseexistingComponent;
  let fixture: ComponentFixture<UseexistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseexistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseexistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
