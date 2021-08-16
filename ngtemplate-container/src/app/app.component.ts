import {Component, OnInit} from '@angular/core';

interface LabelString{
  label: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngtemplate-container';
  counter = Math.random() * 10;

  showLabelString(objLabel: LabelString){
    console.log(objLabel.label);
  }

  ngOnInit() {
    this.showLabelString({label: 'hauphvn'});
  }
}
