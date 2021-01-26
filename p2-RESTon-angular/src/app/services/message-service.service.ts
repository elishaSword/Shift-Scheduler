import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/message';
import { BulletinMessage } from '../models/bulletin-message';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  bulletinUrl: string = "";
  messagesBankUrl: string = "";

  dummyBulletin: Array<Message> = [];

  messages: BehaviorSubject<Message []> = new BehaviorSubject<Message[]>(this.dummyBulletin);

  constructor(private http: HttpClient) { }

  // getBulletinMessage(): BulletinMessage {
  //   // let bMessage: BehaviorSubject<BulletinMessage> = this.http.get<BulletinMessage[]>(this.bulletinUrl).pipe(tap(_ => this.handleError<BulletinMessage>('getBulletinMessage')));
  //   // if(bMessage == null) {
  //   //   bMessage = of(this.dummyBulletin);
  //   // } 
  //   // return bMessage;
  //   return null;
  // }

  // getBulletinMessages(): BehaviorSubject<BulletinMessage[]> {
  //   return null;
  // }

  getMessages(): BehaviorSubject<Message[]> {
    
    return null;
  }

  postMessage(message: Message): Promise<String> {
    return null;
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
