import { ScheduleService } from './../../../services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rev-schedule-view',
  templateUrl: './schedule-view.component.html',
  styleUrls: ['./schedule-view.component.scss']
})
export class ScheduleViewComponent implements OnInit {

  currentSchedule: Schedule;

  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.scheduleService.schedules.subscribe(schedules => {
      this.currentSchedule = schedules.find(e => {
        const csId = this.activatedRoute.snapshot.queryParams.scheduleId;
        return e.id == csId;
      });
    })
  }

}
