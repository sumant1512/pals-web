import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

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
    private authenticationService: AuthenticationService,
    private router: Router,
    private sessionStorageService: SessionStorageService
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
        this.authenticationService
          .sentOtp({ mobile: this.loginForm.value.mobile })
          .subscribe((resp) => {
            if (resp?.status) {
              this.otpSent = true;
              this.sessionStorageService.setItem('userType', resp?.userType);
            }
          })
      );
    }
  }

  verifyOtp() {
    if (this.loginForm.valid) {
      this.subscription.add(
        this.authenticationService
          .verifyOtp(this.loginForm.value)
          .subscribe((resp) => {
            if (resp?.status) {
              this.sessionStorageService.setItem('authToken', resp?.authToken);
              this.router.navigate(['/admin']);
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
