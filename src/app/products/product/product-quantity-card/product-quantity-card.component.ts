import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

  constructor(
    readonly featureService: FeatureService,
    private sanitizer: DomSanitizer
  ) {}

  getSafeImageUrl(imgUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imgUrl);
  }
}
