import { Component } from '@angular/core';
import { ICouponList } from '../services/coupon.interface';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.scss'],
})
export class ViewCouponComponent {
  couponList: Array<ICouponList> = [];
  constructor(private couponService: CouponService) {}

  ngOnInit(): void {
    this.getCouponList();
  }

  getCouponList(): void {
    this.couponService.getCouponList().subscribe((response) => {
      if (response?.status) {
        this.couponList = response.coupons;
      }
    });
  }
}
