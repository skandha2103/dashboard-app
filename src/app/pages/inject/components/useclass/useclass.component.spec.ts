import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseclassComponent } from './useclass.component';

describe('UseclassComponent', () => {
  let component: UseclassComponent;
  let fixture: ComponentFixture<UseclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
