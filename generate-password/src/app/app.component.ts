import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generate-password';
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onClickButton() {
    const letters = 'qwertyuioplkjhgfdsazxcvbnm';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';
    let validPassword = '';
    if(this.includeLetters){
      validPassword += letters;
    }
    if(this.includeNumbers){
      validPassword += numbers;
    }
    if(this.includeSymbols){
      validPassword += symbols;
    }
    let generatePW = '';
    for(let i = 0; i < this.length; i++){
      const pass = Math.floor(Math.random() * validPassword.length);
      generatePW += validPassword[pass];
    }
    this.password = generatePW;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols= !this.includeSymbols;
  }

// ref: https://github.com/angular/angular/issues/35293
  onChangeLength(value: string) {
    const parseLength = parseInt(value);
    if(!isNaN(parseLength)){
      this.length = parseLength;
    }
  }
}
