import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCouponForm } from './add-coupon.form';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent {
  createCouponForm = AddCouponForm();

  constructor(
    private couponService: CouponService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  onSubmit() {
    if (this.createCouponForm.valid) {
      this.couponService
        .createCoupon(this.createCouponForm.value)
        .subscribe((response) => {
          console.log(response);
          if (response && response.status) {
            this.navigateToCoupons();
          }
        });
    }
  }

  navigateToCoupons() {
    this.router.navigate(['../view-coupon'], {
      relativeTo: this.activatedRoute,
    });
  }
}
