import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageToUse } from 'src/app/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  showChat: boolean = false;
  messageToPass!: MessageToUse;

  constructor(private messagesService: MessagesService) {
    this.messagesService.chatSelected.subscribe((message: MessageToUse) => {
      this.showChat = true;
      this.messageToPass = message;
    });
  }

  ngOnInit(): void {
  }

}
