import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private shiftService: ShiftService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
    })
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
