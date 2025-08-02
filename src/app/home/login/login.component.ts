import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  subscription = new Subscription();
  loginForm: FormGroup;
  otpSent: boolean = false;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      mobile: [
        '9579310997',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
      otp: [''],
    });
  }

  sendOtp() {
    if (this.loginForm.controls['mobile'].valid) {
      this.subscription.add(
        this.homeService
          .sentOtp({ mobile: this.loginForm.value.mobile })
          .subscribe((resp) => {
            if (resp?.status) {
              this.otpSent = true;
              console.log(resp);
            }
          })
      );
    }
  }

  verifyOtp() {
    if (this.loginForm.valid) {
      this.subscription.add(
        this.homeService.verifyOtp(this.loginForm.value).subscribe((resp) => {
          if (resp?.status) {
            sessionStorage.setItem('authToken', resp?.authToken);
            this.router.navigate(['admin']);
          }
        })
      );
    }
  }

  goBack() {
    this.otpSent = false;
    this.loginForm.controls['otp'].reset();
  }
}
