import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from '../products.service';
import { IPacket, IProduct } from '../products.interface';
import { CartService } from 'src/app/cart/cart.service';
import { faqs } from './faq.contants';

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
  showModal = false;

  faqQuestions = faqs;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProduct(parseInt(this.activatedRoute.snapshot.params['id']));
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  getProduct(id: number): void {
    this.subscription.add(
      this.productsService.fetchProduct(id).subscribe((response) => {
        if (response?.data?.productId) {
          this.productDetails = response.data;
          this.selectPacket(this.productDetails.packSize[0]);
        }
      })
    );
  }

  getImagePath(imageName: string): string {
    return `./../../../assets/products/${imageName}`;
  }

  add(shade?: string): void {
    const seletcedColor = {
      ...this.selectedPacket,
      productId: this.productDetails.productId,
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
      userId: sessionStorage.getItem('userId'),
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
    const mrp = parseFloat(selectedPacket.mrp);
    const discountPercentage = parseFloat(selectedPacket.discount) / 100;
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
