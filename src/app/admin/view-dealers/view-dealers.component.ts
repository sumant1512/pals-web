import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { IDealerList } from '../services/admin.interface';

@Component({
  selector: 'app-view-dealers',
  templateUrl: './view-dealers.component.html',
  styleUrls: ['./view-dealers.component.scss'],
})
export class ViewDealersComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  dealerList: IDealerList[] = [];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getDealersList();
  }

  getDealersList(): void {
    this.subscription.add(
      this.adminService.getDealerList().subscribe((resp) => {
        if (resp?.status) {
          this.dealerList = resp?.dealers;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
