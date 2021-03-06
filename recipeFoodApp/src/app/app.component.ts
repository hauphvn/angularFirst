import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipeFoodApp';
  loadedFeature = 'recipe';

  onNavigate(page: string){
    this.loadedFeature = page;
  }
}
