import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-sidebard-header',
  templateUrl: './sidebard-header.component.html',
  styleUrls: ['./sidebard-header.component.scss']
})
export class SidebardHeaderComponent implements OnInit {
  name!: string | null;

  constructor(private router: Router, private messagesService: MessagesService) { }

  ngOnInit(): void {
    if (localStorage.getItem("name")) {
      this.name = localStorage.getItem("name");
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.messagesService.messageList = [];
    this.messagesService.messageObservable.next(this.messagesService.messageList);
    this.router.navigate(['/login']);
  }

}
