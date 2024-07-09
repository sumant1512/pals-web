import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  login(userDetails: any): Observable<any> {
    return this.httpClient.post(
      `http://localhost:8080/user/signin`,
      userDetails
    );
  }
}
