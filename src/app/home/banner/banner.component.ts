import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  constructor(private router: Router) {}

  navigateToProductsPage(): void {
    this.router.navigate([APP_ROUTES.PRODUCTS.PARENT]);
  }
}
