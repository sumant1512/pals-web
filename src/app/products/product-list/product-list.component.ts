import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  productList = [
    {
      productId: 1,
      productName: 'Wall Primer (Interior)',
      productImage: './../../assets/products/product_1.jpeg',
    },
    {
      productId: 2,
      productName: 'Wall Primer (Exterior)',
      productImage: './../../assets/products/product_2.jpeg',
    },
    {
      productId: 3,
      productName: 'Acrylic Washable Distemper',
      productImage: './../../assets/products/product_3.jpeg',
    },
    {
      productId: 4,
      productName: 'Plastic Paint (Interior)',
      productImage: './../../assets/products/product_4.jpeg',
    },
    {
      productId: 5,
      productName: 'Plastic Paint (Exterior)',
      productImage: './../../assets/products/product_5.jpeg',
    },
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToProduct(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }
}
