import { ScheduleService } from './../../services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rev-schedule-calander',
  templateUrl: './schedule-calander.component.html',
  styleUrls: ['./schedule-calander.component.scss']
})
export class ScheduleCalanderComponent implements OnInit {

  @Input() schedule: Schedule;
  parsedShifts;

  num: number = 80;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.parsedShifts = this.scheduleService.parseShifts(this.schedule);
  }

}
