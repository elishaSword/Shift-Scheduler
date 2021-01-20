import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCalanderComponent } from './schedule-calander.component';

describe('ScheduleCalanderComponent', () => {
  let component: ScheduleCalanderComponent;
  let fixture: ComponentFixture<ScheduleCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
