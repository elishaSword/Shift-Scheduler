import { Component, Input, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';

@Component({
  selector: 'rev-bulletin-message',
  templateUrl: './bulletin-message.component.html',
  styleUrls: ['./bulletin-message.component.scss']
})
export class BulletinMessageComponent implements OnInit {

  @Input() message: BulletinMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
