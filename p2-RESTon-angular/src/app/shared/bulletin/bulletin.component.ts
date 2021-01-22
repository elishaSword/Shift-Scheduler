import { Component, OnInit } from '@angular/core';

import { BulletinMessage } from 'src/app/models/bulletin-message';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-bulletin-component',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {

  message: Array<BulletinMessage>;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    //Query for Bulletin Messages
  }

}
