import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.nullValidator, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private validation: ValidationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.validation.loggedIn(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value)
    ) {
      this.validation.checkState();
    }
  }
}
