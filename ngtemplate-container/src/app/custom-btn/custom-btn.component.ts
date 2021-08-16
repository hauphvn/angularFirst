import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss']
})
export class CustomBtnComponent implements OnInit {
  @Input() inputBtnTemplate?: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
