import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectContainerComponent } from './inject-container.component';

describe('InjectContainerComponent', () => {
  let component: InjectContainerComponent;
  let fixture: ComponentFixture<InjectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
