import { Component, Input } from '@angular/core';
import { FeatureService } from 'src/app/customer/feature.service';

@Component({
  selector: 'app-product-quantity-card',
  templateUrl: './product-quantity-card.component.html',
  styleUrls: ['./product-quantity-card.component.scss'],
})
export class ProductQuantityCardComponent {
  @Input() productName!: string;
  @Input() productImage!: string;
  @Input() packSize!: string;
  @Input() price!: string;

  constructor(readonly featureService: FeatureService) {}
}
