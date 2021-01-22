import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  createMessage(): void {
    let message: Message = new Message();
    this.messageService.createMessage(message).subscribe();
  }

}
