import { Component, OnInit, Input } from '@angular/core';
import { MessageToUse } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat-proper',
  templateUrl: './chat-proper.component.html',
  styleUrls: ['./chat-proper.component.scss']
})
export class ChatProperComponent implements OnInit {
  @Input() message!: MessageToUse;
  inputValue: string = '';
  showEmoji: boolean = false;

  constructor(private messagesServices: MessagesService) { }

  ngOnInit(): void {
  }

  sendMessage(event: Event): void {
    event.preventDefault();
    if (this.inputValue.trim() !== '') {
      let indexToEliminate: number = 0;
      let elementToShift: MessageToUse[] = [];
      this.messagesServices.messageList.forEach((element: MessageToUse, index: number) => {
        if (element.id === this.message.id) {
          const time = this.messagesServices.getCurrentTime();
          element.messages.push({ text: this.inputValue, time: time, isMe: true, isRead: true });
          elementToShift.push(element);
          indexToEliminate = index;
        }
      });
      this.messagesServices.messageList.splice(indexToEliminate, 1);
      this.messagesServices.messageList.unshift(elementToShift[0]);
      this.messagesServices.messageObservable.next(this.messagesServices.messageList);
      this.messagesServices.askForAnswer(this.message.id, this.inputValue);
    } else {
      return;
    }
    this.inputValue = '';
  }

  addEmoji(emoji: any): void {
    this.inputValue += emoji.emoji.native;
    this.showEmoji = !this.showEmoji;
  }

}
