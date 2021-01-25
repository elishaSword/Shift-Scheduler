import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-weekly-schedule-calendar',
  templateUrl: './weekly-schedule-calendar.component.html',
  styleUrls: ['./weekly-schedule-calendar.component.scss']
})
export class WeeklyScheduleCalendarComponent implements OnInit {

  @Input() schedule: Schedule;
  parsedShifts;
  name: string = "Ted";

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.parseShiftsByEmployee(this.schedule)
    .then(shifts => {
      console.log(shifts);
      this.parsedShifts = shifts;
    })
    // this.parsedShifts = this.scheduleService.parseShiftsByEmployee(this.schedule);
    console.log(this.parsedShifts);
  }
}
