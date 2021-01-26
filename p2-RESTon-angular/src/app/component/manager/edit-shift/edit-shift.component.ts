import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  @Input() shift:Shift;
  @Input() date: Date;
  users: User[];
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

  startTime: string;
  endTime: string;

  constructor(
    private shiftService: ShiftService,
    private userService: UserService,
    private route: Router,
    private dateService: DateService
    ) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
  })
  this.currentDayInt = parseInt(this.route.url.split("=")[1][0]);
  this.currentDay = this.days[this.currentDayInt];
  this.date = this.shift.shiftTime;
  }

  editShift() {
    console.log('clicked');
    this.shift.shiftTime = this.dateService.changeTime(this.shift.shiftTime, this.startTime)
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
