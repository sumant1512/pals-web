import { Component } from '@angular/core';
import { AddCouponForm } from './add-coupon.form';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent {
  createCouponForm = AddCouponForm();

  constructor(private couponService: CouponService) {}

  onSubmit() {
    if (this.createCouponForm.valid) {
      console.log(this.createCouponForm.value);
      this.couponService
        .createCoupon(this.createCouponForm.value)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
