import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageToUse } from 'src/app/models/message';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebard-main',
  templateUrl: './sidebard-main.component.html',
  styleUrls: ['./sidebard-main.component.scss']
})
export class SidebardMainComponent implements OnInit {
  messageList!: MessageToUse[];

  constructor(private messagesService: MessagesService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.messagesService.giveMessages()
      .subscribe((res: MessageToUse[]) => {
        this.messageList = res;
      });
  }

  onClick(message: MessageToUse) {
    message.messages[message.messages.length - 1].isRead = true;
    this.messagesService.chatSelected.emit(message);
  }

  getSearchedWord(): string {
    return this.searchService.searchedWord;
  }

}
