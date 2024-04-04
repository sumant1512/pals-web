import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export function ItemsForm(): FormGroup {
  return new FormGroup({
    items: new FormArray([]),
  });
}

export function ProductForm(): FormGroup {
  return new FormGroup({
    productId: new FormControl(''),
    packetSize: new FormControl(''),
    mrp: new FormControl(''),
    discount: new FormControl(''),
    soldPrice: new FormControl(''),
    shade: new FormControl(''),
  });
}
