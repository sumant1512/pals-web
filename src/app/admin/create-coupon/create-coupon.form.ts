import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ECoupon } from '../services/coupon.enum';

export function CreateCouponForm(): FormGroup {
  return new FormGroup({
    [ECoupon.AMOUNT]: new FormControl('', [Validators.required]),
    [ECoupon.NO_OF_COUPANS]: new FormControl('', [Validators.required]),
  });
}
