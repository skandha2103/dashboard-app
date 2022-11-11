import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServContainerComponent } from './serv-container.component';

describe('ServContainerComponent', () => {
  let component: ServContainerComponent;
  let fixture: ComponentFixture<ServContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
