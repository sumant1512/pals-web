import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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

  logout(userId: string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/user/signout/${userId}`);
  }
}
