import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-weekly-enrolls',
  templateUrl: './weekly-enrolls.component.html',
  styleUrls: ['./weekly-enrolls.component.scss']
})
export class WeeklyEnrollsComponent implements OnInit {

  @Input() schedule: Schedule;
  parsedShifts;
  name: string = "Ted";
  viewModal:string = "";

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.parseShiftsByEmployee(this.schedule)
    .then(shifts => {
      this.parsedShifts = shifts;
    })
  }

  scheduleCheck(val): any {
    switch(typeof val) {
      case "object":
        return "Scheduled";
      break;
      case "number":
        return "Off";
        break;
      case "string":
        return "Not Scheduled";
        break;
    }
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }
}
