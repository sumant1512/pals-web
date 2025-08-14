import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
})
export class ProductCarouselComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
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
        this.productList = productList.products;
      })
    );
  }

  navigateToProductsPage(): void {
    this.router.navigate(['products']);
  }

  navigateToProduct(id: string): void {
    console.log('called here', id);
    this.router.navigate(['products', id], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
