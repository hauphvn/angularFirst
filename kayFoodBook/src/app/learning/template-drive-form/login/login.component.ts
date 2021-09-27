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
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
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
