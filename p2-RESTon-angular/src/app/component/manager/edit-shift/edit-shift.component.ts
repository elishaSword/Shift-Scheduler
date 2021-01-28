import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Position } from 'src/app/models/position';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { PositionService } from 'src/app/services/position.service';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'rev-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  @Input() shift:Shift;
  @Input() date: Date;
  users: User[];
  positions: Position[];
  errorMessage: string = "";
  currentDayInt: number;
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
  startTime: string;
  endTime: string;
  positionId: number;

  constructor(
    private shiftService: ShiftService,
    private userService: UserService,
    private route: Router,
    private dateService: DateService,
    private positionService: PositionService,
    ) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
  })
  this.positionService.getPositions().then(e => {
    this.positions = e;
  })
  this.currentDayInt = parseInt(this.route.url.split("=")[1][0]);
  this.currentDay = this.days[this.currentDayInt];
  this.date = this.shift.shiftStartTime;
  this.startTime = moment.utc(this.shift.shiftStartTime).format("hh:mm");
  this.endTime = moment.utc(this.shift.shiftEndTime).format("hh:mm");
  }

  editShift() {
    this.shift.user = this.users.find(e => e.id == this.userId)
    this.shift.position = this.positions.find(e => e.id == this.positionId)
    console.log(this.shift.position);
    this.shift.shiftStartTime = this.dateService.changeTime(this.shift.shiftStartTime, this.startTime)
    this.shift.shiftEndTime = this.dateService.changeTime(this.shift.shiftEndTime, this.endTime)
    console.log(this.shift);
    this.shiftService.putShift(this.shift)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      this.errorMessage = err;
    })
  }
}
