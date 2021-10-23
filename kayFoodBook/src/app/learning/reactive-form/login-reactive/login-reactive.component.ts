import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-reactive',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.scss']
})
export class LoginReactiveComponent implements OnInit {
  signUpForm!: FormGroup;
  genders = ['male','female', 'others'];
  forbiddenEmail = ['hau1@gmail.com', 'hau2@gmail.com'];
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        this.onForbiddenEmail.bind(this)]),
        password:  new FormControl('', [Validators.required]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signUpForm.errors);
    console.log(this.signUpForm);
  }

  get hobbies() {
    return this.signUpForm.get('hobbies') as FormArray;
  }

  addHobby() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  onForbiddenEmail(control: FormControl): { [p: string]: boolean } | null {
    console.log('control: ', control)
    if(this.forbiddenEmail.indexOf(control.value) !== -1){
      return {'emailIsForbidden' : true};
    }
    return null;
  }

  onForbiddenPassword(control: FormControl): Promise<any> | Observable<any> {
    console.log('control password: ', control);
    const promise = new Promise((resolve, reject) => {
      if(control.value === 'hauphvn@gmail.com'){
        setTimeout(() => {
          resolve({'passwordIsForbidden': true});
        }, 1500);
      } else {
        resolve(null);
      }
    });
    return promise;
  }
}
