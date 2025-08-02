import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MobileInterface {
  mobile: string;
}
export interface LoginInterface extends MobileInterface {
  otp: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

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
}
