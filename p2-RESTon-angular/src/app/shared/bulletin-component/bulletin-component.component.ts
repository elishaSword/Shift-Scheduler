import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rev-bulletin-component',
  templateUrl: './bulletin-component.component.html',
  styleUrls: ['./bulletin-component.component.scss']
})
export class BulletinComponentComponent implements OnInit {


  roleName: String = "";
  message: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
