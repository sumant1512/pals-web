import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

// Custom validator
function minLengthArray(min: number) {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c instanceof FormArray) {
      return c.length >= min
        ? null
        : { minLengthArray: { requiredLength: min, actualLength: c.length } };
    }
    return null;
  };
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  productForm!: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      shortDescription: ['', Validators.required],
      image: ['', Validators.required],
      packSize: this.fb.array([], minLengthArray(1)), // dynamic form array
    });

    this.productForm
      .get('isShadeEnabled')
      ?.valueChanges.subscribe((enabled) => {
        if (!enabled) {
          this.productForm.get('pigmentPrice')?.reset();
        }
      });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        // Save in your form
        this.selectedImage = base64String;
        this.productForm.patchValue({ image: base64String });
      };
      reader.readAsDataURL(file);
    }
  }

  get packSize(): FormArray {
    return this.productForm.get('packSize') as FormArray;
  }

  newPack(): FormGroup {
    return this.fb.group({
      mrp: ['', Validators.required],
      size: ['', Validators.required],
      discount: [0],
    });
  }

  addPack() {
    this.packSize.push(this.newPack());
  }

  removePack(index: number) {
    this.packSize.removeAt(index);
  }

  submit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }
    console.log(this.productForm.value);
  }
}
