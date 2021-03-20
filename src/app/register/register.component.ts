import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginPattern = "^[a-zA-Z0-9][a-zA-Z0-9-_\\.]{1,40}$";
  emailPattern = "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9]{1,40}(?:[a-zA-Z0-9-]{0,40}\n" +
    "[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{1,40}[a-zA-Z0-9])?)*$";
  passwordPattern = "^(?=.*\\d)(?=.*[a-zA-Z])(?!.*\\s).{8,40}$";

  registerForm = new FormGroup({
    login: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    passwordRepeat: new FormControl("", Validators.required)
  })

  isLoginInvalid = false;
  isPasswordInvalid = false;
  isEmailInvalid = false;
  isPasswordRepeatInvalid = false;

  constructor() { }

  ngOnInit(): void {
  }

  submit(event: Event) {
    event.preventDefault();
    if(this.canSubmit()) {
      console.log(this.registerForm.value);
    }
    else {
      if(this.login.invalid)
        this.isLoginInvalid = true;
      if(this.email.invalid)
        this.isEmailInvalid = true;
      if(this.password.invalid)
        this.isPasswordInvalid = true;
      if(this.passwordRepeat.invalid)
        this.isPasswordRepeatInvalid = true;
    }
  }

  canSubmit() {
    return !Validators.required(this.login)
      && !Validators.required(this.email)
      && !Validators.required(this.password)
      && !Validators.required(this.passwordRepeat)
      && !this.login.invalid
      && !this.email.invalid
      && !this.password.invalid
      && !this.passwordRepeat.invalid;
  }

  loginChange() {
    this.isLoginInvalid = false;
  }

  emailChange() {
    this.isEmailInvalid = false;
  }

  passwordChange() {
    this.isPasswordInvalid = false;
  }

  passwordRepeatChange() {
    this.isPasswordRepeatInvalid = false;
  }

  get login() { return this.registerForm.get("login"); }

  get email() { return this.registerForm.get("email"); }

  get password() { return this.registerForm.get("password"); }

  get passwordRepeat() { return this.registerForm.get("passwordRepeat"); }
}
