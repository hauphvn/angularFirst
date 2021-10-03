import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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
      userData: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password:  new FormControl('', Validators.required),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

  get hobbies() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  addHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
