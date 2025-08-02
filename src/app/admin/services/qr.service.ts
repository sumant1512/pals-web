import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IQrRequestBody } from './qr.interface';

@Injectable({
  providedIn: 'root',
})
export class QrService {
  constructor(private http: HttpClient) {}

  createQr(body: IQrRequestBody): Observable<any> {
    const createQr = 'http://localhost:8080/api/coupon/generate';
    return this.http.post<any>(createQr, body).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return response.message;
        }
      })
    );
  }

  getQrList(): Observable<any> {
    const getQrs = 'http://localhost:8080/api/coupon/get';
    return this.http.get<any>(getQrs).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
