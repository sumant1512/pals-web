import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit, OnDestroy {
  productList: any[] = [];
  subscription = new Subscription();

  constructor(private readonly productService: ProductService) {}

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
