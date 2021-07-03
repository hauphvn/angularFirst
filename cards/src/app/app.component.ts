import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards';
  contents = [
    {title:'Neat Tree',
    username: 'nature',
    img:'assets/tree.jpeg',
    desc:'I saw this neat tree today'
    },
    {title:'Snowy Mountain',
      username: 'mountainLover',
      img:'assets/mountain.jpeg',
      desc:'Here is a picture of snowy mountain'
    },
    {title:'Mountain Biking',
      username: 'biking1222',
      img:'assets/biking.jpeg',
      desc:'I did some biking today'
    }
  ]
}
