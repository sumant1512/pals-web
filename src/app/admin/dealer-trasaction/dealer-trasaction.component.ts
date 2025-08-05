import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dealer-trasaction',
  templateUrl: './dealer-trasaction.component.html',
  styleUrls: ['./dealer-trasaction.component.scss'],
})
export class DealerTrasactionComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.navigateToTransactions(id);
      }
    });
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
