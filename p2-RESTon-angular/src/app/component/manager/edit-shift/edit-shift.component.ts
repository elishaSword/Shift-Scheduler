import { Component, Input, OnInit } from '@angular/core';
import { Shift } from 'src/app/models/shift';

@Component({
  selector: 'rev-edit-shift',
  templateUrl: './edit-shift.component.html',
  styleUrls: ['./edit-shift.component.scss']
})
export class EditShiftComponent implements OnInit {

  @Input() shift:Shift;

  constructor() { }

  ngOnInit(): void {
  }

}
