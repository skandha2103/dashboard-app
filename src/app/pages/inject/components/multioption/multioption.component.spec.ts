import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultioptionComponent } from './multioption.component';

describe('MultioptionComponent', () => {
  let component: MultioptionComponent;
  let fixture: ComponentFixture<MultioptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultioptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultioptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
