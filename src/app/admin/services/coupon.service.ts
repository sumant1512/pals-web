import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICouponRequestBody } from './coupon.interface';
import { map, Observable } from 'rxjs';
import { ACTIVE_BE } from 'src/app/shared/constants/config';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(private http: HttpClient) {}

  createCoupon(body: ICouponRequestBody): Observable<any> {
    const createCoupon = `${ACTIVE_BE}/api/coupon/generate`;
    return this.http.post<any>(createCoupon, body).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }

  getCouponList(): Observable<any> {
    const getCoupons = `${ACTIVE_BE}/api/coupon/get`;
    return this.http.get<any>(getCoupons).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
