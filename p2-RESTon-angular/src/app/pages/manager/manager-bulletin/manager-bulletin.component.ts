import { Component, Input, OnInit } from '@angular/core';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';

@Component({
  selector: 'rev-manager-bulletin',
  templateUrl: './manager-bulletin.component.html',
  styleUrls: ['./manager-bulletin.component.scss']
})
export class ManagerBulletinComponent implements OnInit {

  myMessages: Array<BulletinMessage>;

  constructor(private bulletinService: BulletinServiceService) { }

  ngOnInit(): void {
    console.log('init');

    this.bulletinService.populateBulletinMessages()
    .then(res => console.log(res))
    .catch(error => console.log(error))

    this.bulletinService.bulletinMessages.subscribe(messages => {
      this.myMessages = messages;
      console.log(messages);
    });
  }

}
