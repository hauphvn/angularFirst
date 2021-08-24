import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = [
    '10 rockets built',
    'new configurations available'
  ];

  addMessage(message: string) {
    this.messages.push(message);
  }

  getMessage(): string[] {
    return this.messages;
  }
}
