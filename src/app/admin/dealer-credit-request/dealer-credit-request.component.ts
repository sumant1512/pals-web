import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { RedeemRequest } from '../services/admin.interface';
import { ETransactionStatus } from '../services/admin.enum';

@Component({
  selector: 'app-dealer-credit-request',
  templateUrl: './dealer-credit-request.component.html',
  styleUrls: ['./dealer-credit-request.component.scss'],
})
export class DealerCreditRequestComponent {
  private subscription = new Subscription();
  dealerCreditRequest: RedeemRequest[] = [];
  expanded: boolean[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getRedeemCreditRequest();
  }

  getStatusColor(status: ETransactionStatus | undefined): string {
    switch (status) {
      case 'approved':
      case 'scanned':
        return '#4CAF50';
      case 'pending':
        return '#FF9800';
      case 'rejected':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  }

  getRedeemCreditRequest(): void {
    this.subscription.add(
      this.adminService.getRedeemCreditRequest().subscribe((resp) => {
        if (resp.status) {
          this.dealerCreditRequest = resp?.redeemRequests;
          console.log(this.dealerCreditRequest);
        }
      })
    );
  }

  approve(txn: any) {
    this.subscription.add(
      this.adminService
        .approveAndRejectRedeemRequest(txn._id, 'approve')
        .subscribe((resp) => {
          if (resp.status) {
            console.log(resp);
          }
        })
    );
  }

  reject(txn: any) {
    this.subscription.add(
      this.adminService
        .approveAndRejectRedeemRequest(txn._id, 'reject')
        .subscribe((resp) => {
          if (resp.status) {
            console.log(resp);
          }
        })
    );
  }

  toggleExpand(index: number) {
    this.expanded[index] = !this.expanded[index];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
