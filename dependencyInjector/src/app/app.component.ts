import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/messageService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dependencyInjector';
  message = '';
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    console.log(JSON.stringify(this.messageService.getMessage()));
  }

  onGetMsg() {
    this.message = this.messageService.getMessage().toString();
  }
}
