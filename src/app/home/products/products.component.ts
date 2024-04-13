import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigateToProduct(id: number): void {
    console.log('called here', id);
    this.router.navigate(['products', id], { relativeTo: this.activatedRoute });
  }
}
