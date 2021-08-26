import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() outNavType: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.outNavType.emit('recipe');
  }

  onClickNav(event: string) {
    if(event !== ''){
      this.outNavType.emit(event);
    }
  }

}
