import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICouponRequestBody } from './coupon.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private http: HttpClient) {}

  createCoupon(body: ICouponRequestBody): Observable<any> {
    const createCoupon = 'http://localhost:8080/api/coupon/generate';
    return this.http.post<any>(createCoupon, body).pipe(
      map((response) => {
        if (response) {
          console.log(response);
          return response.message;
        }
      })
    );
  }

  getCouponList(): Observable<any> {
    const getCoupons = 'http://localhost:8080/api/coupon/get';
    return this.http.get<any>(getCoupons).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
