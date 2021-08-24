import {Component, ViewEncapsulation} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = '';

  onInput(value: string) {
    this.inputText = value;
  }

  addClass(letter: string, inputTextElement: string): string {
    if(!inputTextElement){
      return "pending";
    }
    return (letter === inputTextElement) ? 'correct' : 'incorrect';
  }
}
