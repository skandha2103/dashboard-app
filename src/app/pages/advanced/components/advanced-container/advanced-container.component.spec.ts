import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedContainerComponent } from './advanced-container.component';

describe('AdvancedContainerComponent', () => {
  let component: AdvancedContainerComponent;
  let fixture: ComponentFixture<AdvancedContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
