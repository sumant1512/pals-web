import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { ProductsService } from 'src/app/products/products.service';
import { ActivatedRoute } from '@angular/router';

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
export class AddProductComponent implements OnInit, OnDestroy {
  productForm!: FormGroup;
  productTypes = Object.values(EProductType);
  selectedImage: string | ArrayBuffer | null = null;
  isEditMode = false;
  selectedProductId!: string;
  subscription = new Subscription();

  constructor(
    private readonly fb: FormBuilder,
    private readonly productService: ProductService,
    private readonly productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      shortDescription: ['', Validators.required],
      longDescription: ['', Validators.required],
      image: ['', Validators.required],
      largeImage: ['', Validators.required],
      thumbnail: ['', Validators.required],
      packSize: this.fb.array([], minLengthArray(1)),
    });
  }

  ngOnInit(): void {
    this.selectedProductId = this.activatedRoute.snapshot.params['id'];
    if (this.selectedProductId) {
      this.isEditMode = true;
      this.getProduct(this.activatedRoute.snapshot.params['id']);
    }
  }

  getProduct(id: string): void {
    this.subscription.add(
      this.productsService.fetchProduct(id).subscribe((response) => {
        if (response?.status) {
          this.productForm.reset();
          this.productForm.patchValue({
            productName: response.productDetails.productName,
            productType: response.productDetails.productType,
            shortDescription: response.productDetails.shortDescription,
            longDescription: response.productDetails.longDescription,
            image: response.productDetails.image,
            largeImage: response.productDetails.largeImage,
            thumbnail: response.productDetails.thumbnail,
          });
          this.selectedImage = response.productDetails.image;
          response.productDetails.packSize.forEach((pack: any) => {
            this.packSize.push(this.newPack(pack));
          });
        }
      })
    );
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

  newPack(data?: any): FormGroup {
    return this.fb.group({
      mrp: [data?.mrp || '', Validators.required],
      size: [data?.size || '', Validators.required],
      discount: [data?.discount || 0],
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
    if (this.isEditMode) {
      this.subscription.add(
        this.productService
          .updateProduct(this.selectedProductId, this.productForm.value)
          .subscribe((response: any) => {
            console.log('Product created successfully:', response);
            if (response && response.status) {
              this.getProduct(this.selectedProductId);
            }
          })
      );
    } else {
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
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
