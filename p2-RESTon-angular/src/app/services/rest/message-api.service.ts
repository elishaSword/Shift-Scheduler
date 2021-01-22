import { Injectable } from '@angular/core';
import { MessageInterface } from 'src/app/interfaces/message-interface';
import { Message } from 'src/app/models/message';
import { ApiService } from './api.service';
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MessageApiService {

  constructor(private api: ApiService) { }

  public get(): Promise<MessageInterface[]> {
    return new Promise((resolve, reject) => {
      this.api.get<MessageInterface[]>('Message').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public getById(): Promise<MessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.get<MessageInterface>('Message').pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public post(Message: Message): Promise<MessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.post<MessageInterface>('Message', Message).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public put(Message: Message): Promise<MessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.put<MessageInterface>('Message', Message).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
  public delete(Message: Message): Promise<MessageInterface> {
    return new Promise((resolve, reject) => {
      this.api.delete<MessageInterface>('Message', Message).pipe(take(1)).subscribe(res => {
        resolve(res);
      }, error => {
        reject("Error: " + error);
      })
    })
  }
}
