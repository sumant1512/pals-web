import { Component, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { EProductType } from '../services/product.enum';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

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
export class AddProductComponent implements OnDestroy {
  productForm!: FormGroup;
  productTypes = Object.values(EProductType);
  selectedImage: string | ArrayBuffer | null = null;
  subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private readonly productService: ProductService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      shortDescription: ['', Validators.required],
      image: ['', Validators.required],
      packSize: this.fb.array([], minLengthArray(1)),
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
    this.subscription.add(
      this.productService
        .createProduct(this.productForm.value)
        .subscribe((response: any) => {
          console.log('Product created successfully:', response);
          if (response && response.status) {
            this.productForm.reset();
            this.packSize.clear();
            this.selectedImage = null;
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
