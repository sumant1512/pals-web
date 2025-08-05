import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-dealer-credit-request',
  templateUrl: './dealer-credit-request.component.html',
  styleUrls: ['./dealer-credit-request.component.scss'],
})
export class DealerCreditRequestComponent {
  private subscription = new Subscription();
  dealerCreditRequest = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getRedeemCreditRequest();
  }

  getRedeemCreditRequest(): void {
    this.subscription.add(
      this.adminService.getRedeemCreditRequest().subscribe((resp) => {
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
