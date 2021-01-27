import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/services/message-service.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'rev-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  message: Message;
  users: Array<User>;
  currentUser: User = {
    id: 4,
    firstName: 'Bobby',
    lastName: 'McApple',
    email: 'mcApple@mail.com',
    password: null,
    isManager: false,
    phone: 15,
    availability: {
      id: 1,
      user: null,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
      sunday: true
    }
  };
  targetUser: User;

  constructor(private messageService: MessageService, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
    this.getUsers();
  } 
  
  postMessage(): void {
    // this.messageService.createMessage(this.message).subscribe();
    this.messageService.postMessage(this.message)
      .then(message => console.log(message))
      .catch(message => console.log(message));
  }


  getUser(): void {
    // this.authService.loggedInUser.subscribe(user => this.currentUser = user);
  }

  getUsers(): void {
    this.userService.getAllEmployees()
    .then(users => this.users = users).catch();
  }

  // changeSender(): void {
  //   this.senderType = !this.senderType;
  // }
}
