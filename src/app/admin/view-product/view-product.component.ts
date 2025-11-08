import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  productList: any[] = [];
  subscription = new Subscription();

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.subscription.add(
      this.productService.getAllProductDetails().subscribe((response: any) => {
        if (response && response.status) {
          this.productList = response.products;
        }
        console.log('Product list:', response);
      })
    );
  }

  editProduct(productId: string) {
    this.router.navigate(['../edit-product', productId], {
      relativeTo: this.activatedRoute,
    });
  }

  deleteProduct(productId: string) {
    if (!productId) return;

    this.subscription.add(
      this.productService
        .deleteProduct(productId)
        .subscribe((response: any) => {
          if (response && response.status) {
            this.fetchProducts();
          }
          console.log('Delete response:', response);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
