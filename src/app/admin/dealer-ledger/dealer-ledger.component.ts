import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { IDealer } from '../services/admin.interface';

@Component({
  selector: 'app-dealer-ledger',
  templateUrl: './dealer-ledger.component.html',
  styleUrls: ['./dealer-ledger.component.scss'],
})
export class DealerLedgerComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  dealerList: IDealer[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getDealersLedger();
  }

  getDealersLedger(): void {
    this.subscription.add(
      this.adminService.getDealerLedger().subscribe((resp) => {
        if (resp?.status) {
          console.log(resp);
          this.dealerList = resp.dealers;
        }
      })
    );
  }

  navigateToTransactions(userId: string): void {
    this.subscription.add(
      this.adminService
        .getTransactionsByAdmin({ userId: userId })
        .subscribe((resp) => {
          if (resp.status) {
            console.log(resp);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
