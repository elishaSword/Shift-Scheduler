import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  rooms: Array<Room> = new Array<Room>();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  //retrieves, populates, and creates chatrooms
  getRooms(): void {

  }

}
