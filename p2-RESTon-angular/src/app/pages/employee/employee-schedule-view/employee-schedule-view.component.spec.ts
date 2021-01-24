import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeScheduleViewComponent } from './employee-schedule-view.component';

describe('EmployeeScheduleViewComponent', () => {
  let component: EmployeeScheduleViewComponent;
  let fixture: ComponentFixture<EmployeeScheduleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeScheduleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeScheduleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
