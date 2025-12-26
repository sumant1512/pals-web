import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ACTIVE_BE, BE_PROD_PATH } from 'src/app/shared/constants/config';
import { SessionStorageService } from './session-storage.service';

export interface MobileInterface {
  mobile: string;
  device?: string;
}
export interface LoginInterface extends MobileInterface {
  otp: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authToken$: BehaviorSubject<any>;

  constructor(
    private httpClient: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {
    const sessionValue = this.sessionStorageService.getItem('yourKey');
    this.authToken$ = new BehaviorSubject<any>(
      sessionValue ? JSON.parse(sessionValue) : null
    );
  }

  isUserLoggedIn(): Observable<boolean> {
    return this.sessionStorageService.getItem('authToken')
      ? of(true)
      : of(false);
  }

  sentOtp(sendOtpBody: MobileInterface): Observable<any> {
    const sendOtpApi = `${ACTIVE_BE}/api/auth/send-otp`;
    return this.httpClient.post(sendOtpApi, { ...sendOtpBody, device: 'web' });
  }

  verifyOtp(loginBody: LoginInterface): Observable<any> {
    const verifyOtpApi = `${ACTIVE_BE}/api/auth/verify`;
    return this.httpClient.post(verifyOtpApi, loginBody);
  }

  logout(): Observable<any> {
    const logoutApi = `${ACTIVE_BE}/api/auth/logout`;
    return this.httpClient.get(logoutApi);
  }

  isBeActive(): Observable<any> {
    const healthCheckApi = `${ACTIVE_BE}/health`;
    return this.httpClient.get(healthCheckApi);
  }

  isNewBeActive(): Observable<any> {
    const healthCheckApi = `${BE_PROD_PATH}/health`;
    return this.httpClient.get(healthCheckApi);
  }
}
