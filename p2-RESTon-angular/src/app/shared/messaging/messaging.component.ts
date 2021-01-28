import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  
  @Input() user: User;
  myUser: User = JSON.parse(atob(localStorage.getItem("user")));
  messages: Array<Message>;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

  }

  ngOnChanges(change): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.messages.subscribe(messages => {
      this.messages = [];
      messages.forEach(message => {
        if(message.receiver.id == this.user.id && message.sender.id == this.myUser.id) {
          this.messages.push(message);
        }
      })
    });
  }
}
