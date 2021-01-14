import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  username: string = "admin";
  password: string = "admin";
  isLogged: boolean = false;
  logSession: string = "I'm logged!";

  constructor(private router: Router) {

  }

  loggedIn(username: string, password: string): boolean {
    if (this.username == username && this.password == password) {
      this.isLogged = true;
      localStorage.setItem('logSession', this.logSession);
      return this.isLogged;
    }
    return this.isLogged;
  }

  checkState() {
    if (localStorage.getItem('logSession') == this.logSession) {
      this.router.navigate(['profilePage']);
    }
  }
}
