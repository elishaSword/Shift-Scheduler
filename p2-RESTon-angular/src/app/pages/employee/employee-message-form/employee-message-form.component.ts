import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { User } from 'src/app/models/user';
import { MessageService } from 'src/app/services/message-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'rev-employee-message-form',
  templateUrl: './employee-message-form.component.html',
  styleUrls: ['./employee-message-form.component.scss']
})
export class EmployeeMessageFormComponent implements OnInit {

  message: Message;
  users: Array<User>
  currentUser: User;

  constructor(private messageService: MessageService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {

  }
  
  getUsers(): void {
    this.userService.getAllEmployees().then(users => users = this.users);
  }

  // changeSender(): void {
  //   this.senderType = !this.senderType;
  // }
}
