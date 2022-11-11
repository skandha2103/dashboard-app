import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCompComponent } from './additional-comp.component';

describe('AdditionalCompComponent', () => {
  let component: AdditionalCompComponent;
  let fixture: ComponentFixture<AdditionalCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
