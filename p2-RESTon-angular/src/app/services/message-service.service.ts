import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { BulletinMessage } from '../models/bulletin-message';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageApiService } from './rest/message-api.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  apiWorking: boolean = false;

  bulletinUrl: string = "";
  messagesBankUrl: string = "";

  dummyBulletin: Array<Message> = [];

  messages: BehaviorSubject<Message []> = new BehaviorSubject<Message[]>(this.dummyBulletin);

  constructor(private http: HttpClient, private messageApiService: MessageApiService) { }

  getMessages(user: User): BehaviorSubject<Message[]> {
    
    return null;
  }

  postMessage(message: Message): Promise<String> {
    // console.log(message);
    return new Promise((resolve, reject) => {
      if(message.content.length == 0) {
        return reject("Message is Empty");
      }
      if(!this.apiWorking){
        this.addMessage(message);
        return resolve('Messages retrieved successfully.');
      }

      this.messageApiService.post(message)
      .then(res => {
        this.addMessage(message);
        resolve('Message posted.');
      })
      .catch(error => {
        console.log(error);

        reject('There was an error posting your message');
      })
    })
  }

  private addMessage(message: Message): void {
    let messages = this.messages.value;
    messages.push(message);
    this.messages.next(messages);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
