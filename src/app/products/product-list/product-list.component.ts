import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { FeatureService } from 'src/app/customer/feature.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  isProductsLoading = true;
  productList!: any;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    readonly featureService: FeatureService
  ) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.subscription.add(
      this.productsService.getProductList().subscribe((productList) => {
        this.isProductsLoading = false;
        if (productList && productList.status) {
          this.productList = productList.products;
        }
      })
    );
  }

  navigateToProduct(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
