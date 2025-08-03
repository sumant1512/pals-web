import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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
    return this.httpClient.post(
      `http://localhost:8080/api/auth/send-otp`,
      sendOtpBody
    );
  }

  verifyOtp(loginBody: LoginInterface): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/api/auth/verify`,
      loginBody
    );
  }

  logout(userId: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/user/signout/${userId}`);
  }
}
