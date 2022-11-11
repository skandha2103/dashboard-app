import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirContainerComponent } from './dir-container.component';

describe('DirContainerComponent', () => {
  let component: DirContainerComponent;
  let fixture: ComponentFixture<DirContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
