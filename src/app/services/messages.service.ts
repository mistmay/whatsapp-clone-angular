import { Injectable, Output, EventEmitter } from '@angular/core';
import { FakeMessageApiService } from '../api/fake-message-api.service';
import { ApiResponse, Message, MessageToUse } from '../models/message';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageList: MessageToUse[] = [];
  messageObservable = new BehaviorSubject<MessageToUse[]>([]);
  @Output() chatSelected: EventEmitter<MessageToUse> = new EventEmitter();

  constructor(private api: FakeMessageApiService) { }

  getMessages() {
    this.api.getMessagesFromApi()
      .subscribe((res: ApiResponse) => {
        res.comments.forEach((element: Message) => {
          const message: MessageToUse = { messages: [], id: element.id, postId: element.postId, user: element.user };
          const time: string = this.generateFakeTime();
          message.messages.push({ text: element.body, isMe: false, time: time, isRead: false });
          this.messageList.push(message);
        });
        this.messageObservable.next(this.messageList);
      });
  }

  giveMessages() {
    return this.messageObservable.asObservable();
  }

  generateFakeTime(): string {
    const hour: number = Math.floor(Math.random() * (12) + 1);
    const minutes: number = Math.floor(Math.random() * 60);
    const chooseBoolean: number = Math.round(Math.random());
    const amPm: 'AM' | 'PM' = chooseBoolean ? 'AM' : 'PM';
    return `${hour}:${this.addZero(minutes)} ${amPm}`
  }

  addZero(number: number): string {
    if (number < 10) {
      return `0${number}`;
    } else {
      return String(number);
    }
  }

  getCurrentTime(): string {
    const today: Date = new Date();
    let hour: number = 0;
    let amPM: string = ''
    if (today.getHours() > 12) {
      hour = today.getHours() - 12;
      amPM = 'PM';
    } else {
      hour = today.getHours();
      amPM = 'AM';
    }
    return `${hour}:${this.addZero(today.getMinutes())} ${amPM}`;
  }

  askForAnswer(id: number, question: string): void {
    setTimeout(() => {
      let indexToEliminate: number = 0;
      let elementToShift: MessageToUse[] = [];
      this.messageList.forEach((element: MessageToUse, index: number) => {
        if (element.id === id) {
          const time = this.getCurrentTime();
          element.messages.push({ text: `Answer to "${question}"`, time: time, isMe: false, isRead: false });
          elementToShift.push(element);
          indexToEliminate = index;
        }
      });
      this.messageList.splice(indexToEliminate, 1);
      this.messageList.unshift(elementToShift[0]);
      this.messageObservable.next(this.messageList);
    }, 30000);
  }

}
