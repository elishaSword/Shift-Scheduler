import { Message } from 'src/app/models/message';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message-service.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'rev-manager-message-form',
  templateUrl: './manager-message-form.component.html',
  styleUrls: ['./manager-message-form.component.scss']
})
export class ManagerMessageFormComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  } 
  

}
