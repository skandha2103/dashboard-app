import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerContainerComponent } from './worker-container.component';

describe('WorkerContainerComponent', () => {
  let component: WorkerContainerComponent;
  let fixture: ComponentFixture<WorkerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
