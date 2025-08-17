import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ACTIVE_BE } from 'src/app/shared/constants/config';

export interface MobileInterface {
  mobile: string;
}
export interface LoginInterface extends MobileInterface {
  otp: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authToken$: BehaviorSubject<any>;

  constructor(private httpClient: HttpClient) {
    const sessionValue = sessionStorage.getItem('yourKey');
    this.authToken$ = new BehaviorSubject<any>(
      sessionValue ? JSON.parse(sessionValue) : null
    );
  }

  isUserLoggedIn(): Observable<boolean> {
    return sessionStorage.getItem('authToken') ? of(true) : of(false);
  }

  sentOtp(sendOtpBody: MobileInterface): Observable<any> {
    const sendOtpApi = `${ACTIVE_BE}/api/auth/send-otp`;
    return this.httpClient.post(sendOtpApi, sendOtpBody);
  }

  verifyOtp(loginBody: LoginInterface): Observable<any> {
    const verifyOtpApi = `${ACTIVE_BE}/api/auth/verify`;
    return this.httpClient.post(verifyOtpApi, loginBody);
  }

  logout(): Observable<any> {
    const logoutApi = `${ACTIVE_BE}/api/auth/logout`;
    return this.httpClient.get(logoutApi);
  }
}
