import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

// @Injectable()
@Component({
  selector: 'rev-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  modalFlag: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.modalFlag = false;
  }
}
