import { Component } from '@angular/core';
import { CreateCouponForm } from './create-coupon.form';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss'],
})
export class CreateCouponComponent {
  createCouponForm = CreateCouponForm();

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
