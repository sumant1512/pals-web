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
      this.productService.getProductList().subscribe((response: any) => {
        if (response && response.status) {
          this.productList = response.products;
        }
        console.log('Product list:', response);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
