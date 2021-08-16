import { Component, OnInit } from '@angular/core';
import {MyLogService} from "../../shared/myLog.service";

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {

  constructor(private myLog: MyLogService) {
  }
  title = 'whatIsServiceDI';
  ngOnInit() {
    this.myLog.nameLog = 'log comp a';
  }

  showBtn() {
    console.log("comp a: ");
    console.log(this.myLog.nameLog);
  }
}
