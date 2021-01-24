import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service.service';
import { Position } from 'src/app/models/position';
import { PositionService } from 'src/app/services/position.service';

/**
 * Message Model
 * id = 0;
  sender = null;
  content = '';
  time = null;
  receiver = null;
 * 
 */

 /**
  * Bulletin Model
  * id: number;
  user: User;
  content: string;
  time: Date;
  position: Position;
  */


@Component({
  selector: 'rev-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  message: Message = new Message();

  positions: Array<Position>;
  constructor(private messageService: MessageService, private positionService: PositionService) { }

  ngOnInit(): void {
    this.getPositions();
  }

  createMessage(): void {
    this.messageService.createMessage(this.message).subscribe();
  }

  getPositions(): void {
    this.positionService.getPositions().subscribe(positions => this.positions = positions);
  }

}
