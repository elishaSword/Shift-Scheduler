import { Component, OnInit, Input} from '@angular/core';
import { MessageService } from 'src/app/services/message-service.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { BulletinMessage } from 'src/app/models/bulletin-message';
import { Position } from 'src/app/models/position';
import { PositionService } from 'src/app/services/position.service';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'rev-bulletin-form',
  templateUrl: './bulletin-form.component.html',
  styleUrls: ['./bulletin-form.component.scss']
})
export class BulletinFormComponent implements OnInit {
  message: BulletinMessage = new BulletinMessage();
  @Input() positions: Array<Position>;
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
  targetPosition: Position;

  constructor(private bulletinService: BulletinServiceService, private positionService: PositionService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
    this.getPositions();
  } 
  
  // postMessage(): void {
  //   // this.messageService.createMessage(this.message).subscribe();
  //   this.messageService.postMessage(this.message)
  //     .then(message => console.log(message))
  //     .catch(message => console.log(message));
  // }


  getUser(): void {
    // this.authService.loggedInUser.subscribe(user => this.currentUser = user);
  }

  getPositions(): void {
    this.positionService.getPositions()
    .then(pos => { 
      this.positions = pos;
      // console.log(this.positions[0]); 
    }).catch(error => console.log(error));
  }

  setTargetPosition(position): void {
    this.targetPosition = position;
    console.log(position);
  }

  onClear(): void {
    this.message = null;
  }

  onSubmit(event){
    event.preventDefault();
    this.message.user = this.currentUser;
    this.message.position = this.targetPosition;
    console.log(this.targetPosition);
    console.log(this.message);

    console.log("submitted");
    this.bulletinService.postBulletinMessage(this.message)
    .then(message => {
      console.log(message);
    }).catch(
      errorMessage => {
        console.log(errorMessage);
      }
    )
  }
}
