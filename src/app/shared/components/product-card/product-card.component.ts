import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() product!: any;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeImageUrl(imgUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imgUrl);
  }
}
