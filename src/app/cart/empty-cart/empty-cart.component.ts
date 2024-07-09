import { Component } from '@angular/core';
import { APP_ROUTES } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss'],
})
export class EmptyCartComponent {
  appRoutes = APP_ROUTES;
}
