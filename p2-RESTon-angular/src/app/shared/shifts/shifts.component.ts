import { Route } from '@angular/compiler/src/core';
import { AfterContentChecked, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShiftInterface } from 'src/app/interfaces/shift-interface';
import { Schedule } from 'src/app/models/schedule';
import { Shift } from 'src/app/models/shift';
import { DateService } from 'src/app/services/date.service';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'rev-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.scss']
})

export class ShiftsComponent implements OnInit, OnChanges, AfterContentChecked {

  num: number[] = [
    6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5
  ]

  @Input() shift: Shift;
  viewModal: boolean = false;
  currentUser: string;
  currentSchedule: Schedule;

  empName: string = 'Dylan';
  startTime: any;
  endTime: any;
  testTime: number;
  color: string;
  increment: number;
  width: number;
  shiftObject;
  currentShiftStart: Date;

  constructor(
    private route: Router,
    private scheduleService: ScheduleService
    ) { }

  ngOnInit(): void {
    this.initialize();
    this.currentUser = this.route.url.split('/')[1];
  }

  ngOnChanges(): void {
    // this.initialize();
    // this.currentUser = this.route.url.split('/')[1];
  }

  ngAfterContentChecked(): void {
    this.initialize();
    this.currentUser = this.route.url.split('/')[1];
  }

  // Width of times (hours) are currently static pixels, needs to change to something more responsive
  calculateWidth(startTime: number): number {
    return startTime*100;
  }

  calculateIncrement(startTime: number): number {
    return (startTime/60)*100;
  }

  initialize(): void {
    this.scheduleService.getSchedules().subscribe(schedules => {
      this.currentSchedule = schedules.find(e => e.id == parseInt(this.route.url.split('=')[2]))
    })
    this.currentShiftStart = new Date(this.shift.shiftStartTime);
    this.startTime = new Date(this.shift.shiftStartTime).getHours();
    this.endTime =  new Date(this.shift.shiftEndTime).getHours();
    this.testTime = (this.endTime) - (this.startTime);
    this.color = 'aqua';
    this.increment = this.calculateIncrement(new Date(this.shift.shiftStartTime).getMinutes());
    this.width = this.calculateWidth(this.testTime);

    this.shiftObject = {
      'background-color': this.color,
      width: this.width + "px",
      left: this.increment + "px"
    }

  }

  viewModals(bool: boolean): void {
    this.viewModal = bool;
  }
}
