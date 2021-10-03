import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
  signUpForm!: FormGroup;
  genders = ['male','female', 'others'];
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', Validators.required),
      gender: new FormControl('male')
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
