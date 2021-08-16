import { Component, OnInit } from '@angular/core';
import {MyLogService} from "../../shared/myLog.service";

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {

  constructor(private myLog: MyLogService) {
  }
  title = 'whatIsServiceDI';
  ngOnInit() {
    // this.myLog.nameLog = 'log comp a';
  }

  showBtn() {
    console.log("comp b: ");
    console.log(this.myLog.nameLog);
  }
}
