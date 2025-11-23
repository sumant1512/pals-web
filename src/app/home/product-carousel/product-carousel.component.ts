import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/products.service';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  isProductsLoading = true;
  productList!: any;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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

  navigateToProductsPage(): void {
    this.router.navigate([APP_ROUTES.PRODUCTS.PARENT]);
  }

  navigateToProduct(id: string): void {
    console.log('called here', id);
    this.router.navigate([APP_ROUTES.PRODUCTS.PARENT, id], {
      relativeTo: this.activatedRoute,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
