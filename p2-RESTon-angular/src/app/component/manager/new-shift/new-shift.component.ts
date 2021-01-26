import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { DateService } from 'src/app/services/date.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-new-shift',
  templateUrl: './new-shift.component.html',
  styleUrls: ['./new-shift.component.scss']
})
export class NewShiftComponent implements OnInit {

  @Input() date: Date;
  users: User[];
  shift:Shift = new Shift();
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
    this.shift.shiftTime = this.date;
  }

  postShift() {
    this.shift.shiftTime = this.dateService.changeTime(this.date, this.startTime)
    console.log(this.shift);
        // this.shiftService.post(this.shift)
    // .then(res => {
    //   console.log(res);
    // })
    // .catch(err => {
    //   this.errorMessage = err;
    // })
  }


}
