import { Component, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';

@Component({
  selector: 'rev-employee-bulletin',
  templateUrl: './employee-bulletin.component.html',
  styleUrls: ['./employee-bulletin.component.scss']
})
export class EmployeeBulletinComponent implements OnInit {

  // message: BulletinMessage
  // messages: Array<BulletinMessage>
  myMessages: Array<BulletinMessage>

  constructor(private bulletinService: BulletinServiceService) { }

  ngOnInit(): void {
    this.bulletinService.BulletinMessages.subscribe(messages => {
      this.myMessages = messages;
    });
  }

}
