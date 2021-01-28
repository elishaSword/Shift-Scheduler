import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  message: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  postMessage(message: Message): void {
    this.messageService.postMessage(message);
  }

}
