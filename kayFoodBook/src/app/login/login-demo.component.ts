import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {nameError, emailError, pwError} from "../shared/validation/custom-email.validator";

@Component({
  selector: 'app-login-demo',
  templateUrl: './login-demo.component.html',
  styleUrls: ['./login-demo.component.scss']
})
export class LoginDemoComponent implements OnInit {
  userForm!: FormGroup;
  yourSubmit: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required], nameError],
      email:['', [Validators.required, Validators.email], emailError],
      password:['',null, pwError]
    });
  }

  onSubmit(){
    this.yourSubmit = JSON.stringify(this.userForm.value);
    console.log(this.userForm)
  }

  get password() {
    return this.userForm.get('password');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get validForm(): boolean {
    return (
      (this.name!.invalid && (this.name!.dirty || this.name!.touched))
      || ((this.email!.invalid && (this.email!.dirty || this.email!.touched)))
    )
  }
}
