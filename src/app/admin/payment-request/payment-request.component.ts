import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { Subscription } from 'rxjs';
import { IPaymentRequest } from '../services/payment.interface';

@Component({
  selector: 'app-payment-request',
  templateUrl: './payment-request.component.html',
  styleUrls: ['./payment-request.component.scss'],
})
export class PaymentRequestComponent implements OnInit {
  subscription = new Subscription();

  paymentRequestList: Array<IPaymentRequest> = [];

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.getPaymentRequestList();
  }

  getPaymentRequestList(): void {
    this.subscription.add(
      this.paymentService.getPaymentsRequests().subscribe((response) => {
        this.paymentRequestList = response;
      })
    );
  }

  approve(id: number): void {
    this.subscription.add(
      this.paymentService.approvePaymentsRequests(id).subscribe((response) => {
        if (response) {
          console.log(response);
        }
      })
    );
  }
}
