import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICouponList } from '../services/coupon.interface';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.scss'],
})
export class ViewCouponComponent {
  couponList: Array<ICouponList> = [];
  selectedTab = 'active';
  constructor(
    private couponService: CouponService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCouponList();
  }

  navigateToAddCoupons() {
    this.router.navigate(['../add-coupon'], {
      relativeTo: this.activatedRoute,
    });
  }

  getCouponList(): void {
    this.couponService.getCouponList().subscribe((response) => {
      if (response?.status) {
        this.couponList = response.coupons;
      }
    });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  filteredCoupons() {
    if (!this.selectedTab) {
      return this.couponList;
    }
    return this.couponList.filter(
      (coupon) => coupon.status === this.selectedTab
    );
  }
}
