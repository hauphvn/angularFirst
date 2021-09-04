import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  editing = false;
  editingId = -1;
  allowEdit = false;

  serverList = [
    {id: 1,
    name: "serverName1"
    },

    {id: 2,
      name: "serverName2"
    },
    {
      id: 3,
      name: "serverName3"
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoadServer() {
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }
}
