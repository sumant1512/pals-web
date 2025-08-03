import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ACTIVE_BE } from 'src/app/shared/constants/config';
import { IAddDealerRequestBody, IDealderListResponse } from './admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addDealer(body: IAddDealerRequestBody): Observable<any> {
    const createCoupon = `${ACTIVE_BE}/api/dealer/add`;
    return this.http.post<any>(createCoupon, body).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }

  getDealerList(): Observable<IDealderListResponse | undefined> {
    const getCoupons = `${ACTIVE_BE}/api/dealer/get`;
    return this.http.get<IDealderListResponse>(getCoupons).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
