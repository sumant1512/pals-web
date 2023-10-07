import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  getPaymentsRequests(): Observable<any> {
    const getPaymentRequestsUrl = 'http://localhost:8080/payment';
    return this.http.get<any>(getPaymentRequestsUrl).pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }

  approvePaymentsRequests(id: number): Observable<any> {
    const approvePaymentRequestsUrl = `http://localhost:8080/payment/approve/${id}`;
    return this.http.get<any>(approvePaymentRequestsUrl).pipe(
      map((response) => {
        if (response) {
          return response.data;
        }
      })
    );
  }
}
