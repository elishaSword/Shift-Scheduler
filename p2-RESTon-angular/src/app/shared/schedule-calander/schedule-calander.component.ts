import { ScheduleService } from './../../services/schedule.service';
import { Schedule } from 'src/app/models/schedule';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'rev-schedule-calander',
  templateUrl: './schedule-calander.component.html',
  styleUrls: ['./schedule-calander.component.scss']
})
export class ScheduleCalanderComponent implements OnInit {

  @Input() schedule: Schedule;
  parsedShifts;
  day: number;


  num: number = 80;

  constructor(
    private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private dateService: DateService
    ) { }

  ngOnInit(): void {
    this.day = parseInt(this.activatedRoute.snapshot.queryParams.day);
    this.parsedShifts = this.scheduleService.parseShiftsByDay(this.schedule, this.day);
  }

  dateFormatter(date: Date) {
    return this.dateService.dateFormatter(date, this.day);
  }

}
