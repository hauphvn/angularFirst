import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') formSignUp?: NgForm;
  defaultSecret = 'pet';
  answer = '';
  genders = ['Male', 'Female', 'Other'];
  emailSuggest = 'hauphvn@gmail.com';
  userSubmitted = {
    email: '',
    password: '',
    gender: '',
    secretQuestion: '',
    answerSecret: ''
  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.userSubmitted.email = this.formSignUp?.value.userData.email;
    this.userSubmitted.password = this.formSignUp?.value.userData.password;
    this.userSubmitted.gender = this.formSignUp?.value.userData.gender;
    this.userSubmitted.secretQuestion = this.formSignUp?.value.secret;
    this.userSubmitted.answerSecret = this.formSignUp?.value.questionAnswer;
    this.formSignUp?.reset();
  }

  onSuggestUsername() {
    this.formSignUp?.form.patchValue({
      userData: {
        email: this.emailSuggest,
        gender: this.genders[0]
      }
    });
  }
}
