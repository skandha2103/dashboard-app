import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetContainerComponent } from './change-det-container.component';

describe('ChangeDetContainerComponent', () => {
  let component: ChangeDetContainerComponent;
  let fixture: ComponentFixture<ChangeDetContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
