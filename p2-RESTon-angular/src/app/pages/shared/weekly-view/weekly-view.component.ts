import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-weekly-view',
  templateUrl: './weekly-view.component.html',
  styleUrls: ['./weekly-view.component.scss']
})
export class WeeklyViewComponent implements OnInit {

  schedules: Schedule[] = [];
  currentSchedule: Schedule;

  constructor(
    private scheduleService: ScheduleService
  ) { }

  ngOnInit(): void {
    this.scheduleService.schedules.subscribe(schedules => {
      this.schedules = schedules;
      this.currentSchedule = schedules[0];

    })
  }
}
