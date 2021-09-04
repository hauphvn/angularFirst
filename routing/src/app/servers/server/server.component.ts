import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  nameServer = '';
  idServer = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(item => {
      this.nameServer = item.name;
      this.idServer = item.id;
    });
    // this.nameServer = this.route.snapshot.queryParams.name;
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
