import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACTIVE_BE } from '../shared/constants/config';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  contactUs(body: any): Observable<any> {
    return this.httpClient.post(this.getApiPath('/api/email/contact'), body);
  }

  getApiPath(apiName: string): string {
    return `${ACTIVE_BE}${apiName}`;
  }
}
