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

  constructor() { }

  ngOnInit(): void {
  }

  get login() { return this.registerForm.get("login"); }

  get email() { return this.registerForm.get("email"); }

  get password() { return this.registerForm.get("password"); }

  get passwordRepeat() { return this.registerForm.get("passwordRepeat"); }
}
