import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kayFoodBook';
  navType = 'recipe';

  changeNavType(event: string) {
    this.navType = event;
  }
}
