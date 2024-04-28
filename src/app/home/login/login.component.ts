import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private homeService: HomeService, private location: Location) {}

  onLoginClick() {
    this.homeService.login(this.loginForm.value).subscribe((resp) => {
      if (resp?.userId) {
        sessionStorage.setItem('authToken', resp.authToken);
        sessionStorage.setItem('userId', resp?.userId);
        this.location.back();
      }
    });
  }
}
