import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { IPacket, IProduct } from '../products.interface';
import { CartService } from 'src/app/cart/cart.service';
import { FAQS } from './faq.contants';
import { FeatureService } from 'src/app/customer/feature.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { PRODUCT_DETAILS } from 'src/app/shared/constants/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  subscription = new Subscription();
  productDetails!: IProduct;
  selectedPacket!: IPacket;
  selectedPacketList: Array<any> = [];
  productDetailsList = PRODUCT_DETAILS;
  showModal = false;

  faqQuestions = FAQS;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService,
    private readonly featureService: FeatureService,
    private sessionStorageService: SessionStorageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getProduct(this.activatedRoute.snapshot.params['id']);
  }

  getSafeImageUrl(imgUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imgUrl);
  }

  openModal() {
    if (this.featureService.isEnabled('isShadeEnabled')) {
      this.showModal = true;
    } else {
      alert(
        'This product does not have shade selection feature. Connect with us for more details.'
      );
    }
  }

  closeModal() {
    this.showModal = false;
  }

  getProduct(id: string): void {
    this.productDetails = this.productDetailsList.find(
      (productLocal) => productLocal._id === id
    ) as IProduct;
    this.subscription.add(
      this.productsService.fetchProduct(id).subscribe((response) => {
        if (response?.productDetails) {
          this.productDetails = response.productDetails;
          // this.selectPacket(this.productDetails?.packSize[0]);
        }
      })
    );
  }

  getImagePath(imageName: string): string {
    return `products/${imageName}`;
  }

  add(shade?: string): void {
    const seletcedColor = {
      ...this.selectedPacket,
      productId: this.productDetails._id,
      soldPrice: this.getDiscountedPrice(this.selectedPacket),
      quantity: 1,
      color: shade ? shade : '#ffffff',
    };
    this.selectedPacketList.push(seletcedColor);
  }

  onChangeQuantity(productToUpdate: any, action: string): void {
    this.selectedPacketList.forEach((item) => {
      if (
        item.productId === productToUpdate.productId &&
        item.color === productToUpdate.color &&
        item.packId === productToUpdate.packId
      ) {
        if (action === 'add') {
          item.quantity = item.quantity + 1;
        } else {
          item.quantity = item.quantity - 1;
        }
      }
    });
  }

  addNonColor(): void {}

  addToCart(): void {
    const transformedItems = this.selectedPacketList.map((item) => ({
      packId: item.packId,
      shade: item.color,
      quantity: item.quantity,
    }));
    const body = {
      userId: this.sessionStorageService.getItem('userId'),
      cartItems: transformedItems,
    };
    this.cartService.addItemsToCart(body).subscribe((resp) => {
      this.selectedPacketList.length = 0;
    });
  }

  buyNow(): void {
    this.addToCart();
  }

  selectPacket(selectedPacket: IPacket): void {
    this.selectedPacket = selectedPacket;
  }

  getProductTotalPrice(selectedPacket: IPacket, packetCount: number): any {
    return parseFloat(this.getDiscountedPrice(selectedPacket)) * packetCount;
  }

  getDiscountedPrice(selectedPacket: IPacket): string {
    const mrp = parseFloat(selectedPacket.mrp.toString());
    const discountPercentage =
      parseFloat(selectedPacket.discount.toString()) / 100;
    const discountedPrice = mrp - mrp * discountPercentage;
    return discountedPrice.toFixed(2);
  }

  navigateToTryOn(): void {
    this.router.navigateByUrl('try-on');
  }

  navigateToContactsPage(): void {
    this.router.navigate(['/']);
  }
}
