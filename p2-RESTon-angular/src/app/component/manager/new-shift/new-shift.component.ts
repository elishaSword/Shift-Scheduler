import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/position';
import { Schedule } from 'src/app/models/schedule';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { PositionService } from 'src/app/services/position.service';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-new-shift',
  templateUrl: './new-shift.component.html',
  styleUrls: ['./new-shift.component.scss']
})
export class NewShiftComponent implements OnInit {

  @Input() schedule: Schedule;
  @Input() date: Date;
  schedules: Schedule[]
  positions: Position[];
  users: User[];
  shift:Shift = new Shift();
  errorMessage: string = "";
  currentDayInt: number;
  currentScheduleInt: number;
  days: string[] = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ]
  currentDay: string;
  userId: number;
  positionId: number;
  startTime: string;
  endTime: string;

  constructor(
    private userService: UserService,
    private route: Router,
    private dateService: DateService,
    private positionService: PositionService,
    private shiftService: ShiftService
    ) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
    })
    this.positionService.getPositions().then(e => {
      this.positions = e;
    })
    this.currentDayInt = this.date.getUTCDay();
    this.shift.schedule = this.schedule;
    this.currentDay = this.days[this.currentDayInt];
    this.shift.shiftStartTime = this.date;
  }

  postShift() {
    console.log(this.users);
    this.shift.user = this.users.find(e => e.id == this.userId)
    this.shift.position = this.positions.find(e => e.id == this.positionId)
    this.shift.shiftStartTime = this.dateService.changeTime(this.date, this.startTime)
    console.log(this.shift);
    this.shiftService.postNewShift(this.shift)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      this.errorMessage = err;
    })
  }


}
