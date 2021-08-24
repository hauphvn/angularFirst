import { Component, OnInit } from '@angular/core';
import {MessageService} from "../services/messageService";

@Component({
  selector: 'app-child-message',
  templateUrl: './child-message.component.html',
  styleUrls: ['./child-message.component.scss']
})
export class ChildMessageComponent implements OnInit {

  constructor(private messageService : MessageService) { }

  ngOnInit(): void {

  }

  onHandleChange(event: any) {
    this.messageService.addMessage(event.target.value);
    event.target.value = '';
  }
}
