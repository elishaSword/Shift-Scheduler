import { BulletinMessageApiService } from './rest/bulletin-message-api.service';
import { BehaviorSubject, interval } from 'rxjs';
import { Injectable } from '@angular/core';
import { BulletinMessage } from '../models/bulletin-message';
import { startWith, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BulletinServiceService {

  apiWorking: boolean = false;

  bulletinMessages: BehaviorSubject<BulletinMessage[]> = new BehaviorSubject<BulletinMessage[]>([
    {
      id: 0,
      user: {
        id: 4,
        firstName: 'Calvin',
        lastName: 'Mak',
        email: 'calvin@mail.com',
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
      },
      content: 'test',
      time: 637,
      position: null,
    },
    {
      id: 1,
      user: {
        id: 4,
        firstName: 'Calvin',
        lastName: 'Mak',
        email: 'calvin@mail.com',
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
      },
      content: 'test2',
      time: 640,
      position: null,
    }
  ]);

  isPolling: boolean = false;

  constructor(private bulletinMessageApiService: BulletinMessageApiService) { }

  polebulletinMessages(): void {
    // Not sure about this working yet. We need the api to be working to get this to work
    interval(500).pipe(startWith(0), switchMap(() => this.bulletinMessageApiService.get()))
    .subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  populateBulletinMessages(): Promise<string> {
    return new Promise((resolve, reject) => {

      if(!this.apiWorking){
        return resolve('Messages retrieved successfully.');
      }

      this.bulletinMessageApiService.get()
      .then(res => {
        this.bulletinMessages.next(res);
        resolve('Messages retrieved successfully.');
      })
      .catch(error => {
        console.log(error);
        reject('There was an error getting the messages.');
      })
    })
  }

  

  postBulletinMessage(message: BulletinMessage): Promise<string> {
    return new Promise((resolve, reject) => {
      if(message.content.length == 0) {
        return reject('Message is Empty');
      }
      if(!this.apiWorking){
        this.addMessageToBulletin(message);
        return resolve('Messages retrieved successfully.');
      }
      console.log(this.bulletinMessages.value);
      this.bulletinMessageApiService.post(message)
      .then(res => {
        this.addMessageToBulletin(message);
        console.log(this.bulletinMessages.value);
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  private addMessageToBulletin(message: BulletinMessage): void {
    let messages = this.bulletinMessages.value;
    console.log("Adding Message");
    console.log(message);
    messages.push(message);
    this.bulletinMessages.next(messages);
  }
}
