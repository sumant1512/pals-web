import { FormControl, FormGroup, Validators } from '@angular/forms';

export function ContactUsForm(): FormGroup {
  return new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    message: new FormControl(''),
  });
}
