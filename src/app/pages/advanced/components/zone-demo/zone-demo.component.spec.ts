import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDemoComponent } from './zone-demo.component';

describe('ZoneDemoComponent', () => {
  let component: ZoneDemoComponent;
  let fixture: ComponentFixture<ZoneDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
