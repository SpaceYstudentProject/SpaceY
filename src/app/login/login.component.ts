import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() { }

  ngOnInit(): void {
  }

  get login() { return this.loginForm.get("login"); }

  get password() { return this.loginForm.get("password"); }
}
