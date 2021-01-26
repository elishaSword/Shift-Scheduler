import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { ShiftService } from 'src/app/services/shift.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-new-shift',
  templateUrl: './new-shift.component.html',
  styleUrls: ['./new-shift.component.scss']
})
export class NewShiftComponent implements OnInit {

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


  constructor(private shiftService: ShiftService, private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
      console.log(this.users);
    })
    this.currentDayInt = parseInt(this.route.url.split("=")[1][0]);
    this.currentDay = this.days[this.currentDayInt];
  }

  postShift() {
    this.shiftService.postNewShift(this.shift)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      this.errorMessage = err;
    })
  }


}
