import { Component, OnInit } from '@angular/core';
import { ShiftInterface } from 'src/app/interfaces/shift-interface';

@Component({
  selector: 'rev-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  shift: ShiftInterface[] =
  [
    {
    id: 1,
    user: {
      id: 1,
      firstName: 'George',
      lastName: 'Yoo',
      email: 'g@g.com',
      password: null,
      isManager: false,
      phone: 12
    },
    shiftTime: new Date('2021-01-20T10:00:00Z'),
    position: {
      id: 1,
      name: 'Cook'
    },
    schedule: null
  }
]

  roleName: string = "Cashier";

  constructor() { }

  ngOnInit(): void {
  }

}
