import { Component, Input, OnInit } from '@angular/core';

import { Message } from 'src/app/models/message';

@Component({
  selector: 'rev-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;
  
  constructor() { }

  ngOnInit(): void {
  }

  getName(): string {
    return this.message.sender.firstName + ' ' + this.message.sender.lastName;
  }
}
