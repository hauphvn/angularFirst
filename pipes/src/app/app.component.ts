import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'pham van hau';
  date = '';
  amount = 0;
  onChangeName(value : string) {
    this.name = value;
  }
  onChangeDate(value: string){
    this.date = value;
  }

  onChangeCurrency(value: string){
    if(!isNaN(parseFloat(value))){
      this.amount = parseFloat(value);
    }
  }
}
