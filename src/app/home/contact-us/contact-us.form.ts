import { FormControl, FormGroup, Validators } from '@angular/forms';

export function ContactUsForm(): FormGroup {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    message: new FormControl(''),
  });
}
