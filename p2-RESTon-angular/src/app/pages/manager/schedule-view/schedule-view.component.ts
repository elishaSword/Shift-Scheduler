import { ScheduleService } from './../../../services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';

@Component({
  selector: 'rev-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {

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
