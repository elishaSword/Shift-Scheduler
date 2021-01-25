import { Component, Input, OnInit } from '@angular/core';
import { ShiftInterface } from 'src/app/interfaces/shift-interface';

@Component({
  selector: 'rev-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  @Input() shifts: ShiftInterface[];

  @Input() roleName: string = "Cashier";

  constructor() { }

  ngOnInit(): void {
  }

}
