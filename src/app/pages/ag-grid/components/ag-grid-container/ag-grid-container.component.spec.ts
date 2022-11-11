import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridContainerComponent } from './ag-grid-container.component';

describe('AgGridContainerComponent', () => {
  let component: AgGridContainerComponent;
  let fixture: ComponentFixture<AgGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
