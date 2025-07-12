import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  productList = [
    {
      productId: 1,
      productName: 'Wall Primer (Interior)',
      productImage: 'products/product_1.jpeg',
    },
    {
      productId: 2,
      productName: 'Wall Primer (Exterior)',
      productImage: 'products/product_2.jpeg',
    },
    {
      productId: 3,
      productName: 'Acrylic Washable Distemper',
      productImage: 'products/product_3.jpeg',
    },
    {
      productId: 4,
      productName: 'Plastic Paint (Interior)',
      productImage: 'products/product_4.jpeg',
    },
    {
      productId: 5,
      productName: 'Plastic Paint (Exterior)',
      productImage: 'products/product_5.jpeg',
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToProduct(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}
