import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CanComponentDeactivate} from "../../can-deactive-guard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  isSave = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
  }

  onSave() {
    this.isSave = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.isSave){
      return confirm("Do you without save?");
    }else{
      return true;
    }
  }
}
