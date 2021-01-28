import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatroomComponent } from './shared/chatroom/chatroom.component';
import { MessagingComponent } from './shared/messaging/messaging.component';
import { MessageRoomComponent } from './pages/shared/message-room/message-room.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    MessagingComponent,
    MessageRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
