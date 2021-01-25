import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shift';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  @Input() shift:Shift;
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllEmployees().then(e => {
      this.users = e;
  })

  }
}
