import { Component, Input, OnInit } from '@angular/core';
import { Availability } from 'src/app/models/availability';
import { Schedule } from 'src/app/models/schedule';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-weekly-enrolls',
  templateUrl: './weekly-enrolls.component.html',
  styleUrls: ['./weekly-enrolls.component.scss']
})
export class WeeklyEnrollsComponent implements OnInit {

  @Input() schedule: Schedule;
  parsedShifts: any;
  name: string = "Ted";
  viewModal:string = "";

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleService.parseShiftsByEmployee(this.schedule)
    .then(shifts => {
      this.parsedShifts = shifts;
    })
  }

  scheduleCheck(val, availability?: any, day?: number): any {
    switch(typeof val) {
      case "object":
        return "Scheduled";
      break;
      case "number":
        if(availability && !this.checkAvailability(day, availability)) {
          return "Not Scheduled";
        } else {
          return "Off";
        }
        break;
      // case "string":
      //   return "Not Scheduled";
      //   break;
    }
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }

  checkAvailability(day: number, availability: any): boolean {
    console.log(day, availability);
    switch(day) {
      case 0:
        return availability.sunday;
        break;
      case 1:
        return availability.monday;
        break;
      case 2:
        return availability.tuesday;
        break;
      case 3:
        return availability.wednesday;
        break;
      case 4:
        return availability.thursday;
        break;
      case 5:
        return availability.friday;
        break;
      case 6:
        return availability.saturday;
        break;
    }

    return false;
  }
}
