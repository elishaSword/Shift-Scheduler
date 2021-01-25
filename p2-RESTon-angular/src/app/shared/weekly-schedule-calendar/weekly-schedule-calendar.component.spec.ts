import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyScheduleCalendarComponent } from './weekly-schedule-calendar.component';

describe('WeeklyScheduleCalendarComponent', () => {
  let component: WeeklyScheduleCalendarComponent;
  let fixture: ComponentFixture<WeeklyScheduleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyScheduleCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyScheduleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
