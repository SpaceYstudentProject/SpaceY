import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SpacexService} from "../spacex.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginPattern = "^[a-zA-Z0-9][a-zA-Z0-9-_\\.]{1,40}$";
  passwordPattern = "^(?=.*\\d)(?=.*[a-zA-Z])(?!.*\\s).{8,40}$";

  loginForm = new FormGroup({
    login: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  isLoginInvalid = false;
  isPasswordInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(event: Event) {
    event.preventDefault();
    if(this.canSubmit()) {
      console.log(this.loginForm.value); //post
    }
    else {
      if(this.login.invalid) {
        this.isLoginInvalid = true;
      }
      if(this.password.invalid)
        this.isPasswordInvalid = true;
    }
  }

  canSubmit() {
    return !Validators.required(this.login)
      && !Validators.required(this.password)
      && !this.login.invalid
      && !this.password.invalid;
  }

  loginChange() {
    this.isLoginInvalid = false;
  }

  passwordChange() {
    this.isPasswordInvalid = false;
  }

  get login() { return this.loginForm.get("login"); }

  get password() { return this.loginForm.get("password"); }
}
