import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'rev-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.scss']
})
export class ManagerDashboardComponent implements OnInit {

  viewModal:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  viewModals(modal: string): void{
    this.viewModal = modal;
  }
}
