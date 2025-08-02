import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EQr } from '../services/qr.enum';

export function QrCreateForm(): FormGroup {
  return new FormGroup({
    [EQr.AMOUNT]: new FormControl('', [Validators.required]),
    [EQr.NO_OF_COUPANS]: new FormControl('', [Validators.required]),
  });
}
