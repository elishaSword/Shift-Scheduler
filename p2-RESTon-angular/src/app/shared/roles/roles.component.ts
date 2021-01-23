import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roleName: string = "Cashier";

  constructor() { }

  ngOnInit(): void {
  }

}
