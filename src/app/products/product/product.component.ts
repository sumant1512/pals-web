import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IPacket, IProduct } from '../products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productDetails!: IProduct;
  selectedPacket!: IPacket;
  selectedPacketList: Array<any> = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct(parseInt(this.route.snapshot.params['id']));
  }

  getProduct(id: number): void {
    this.productsService.fetchProduct(id).subscribe((response) => {
      if (response?.id) {
        this.productDetails = response;
        this.selectPacket(this.productDetails.packetSize[0]);
      }
    });
  }

  getImagePath(imageName: string): string {
    return `./../../../assets/products/${imageName}`;
  }

  add(shade: string): void {
    this.selectedPacketList.push({
      ...this.selectedPacket,
      productId: this.productDetails.id,
      soldPrice: this.getDiscountedPrice(this.selectedPacket),
      color: shade,
    });
  }

  addToCart(): void {
    console.log(this.selectedPacketList);
    this.selectedPacketList.length = 0;
  }

  selectPacket(selectedPacket: IPacket): void {
    this.selectedPacket = selectedPacket;
  }

  getDiscountedPrice(selectedPacket: IPacket): string {
    const mrp = parseFloat(selectedPacket.mrp);
    const discountPercentage = parseFloat(selectedPacket.discount) / 100;
    const discountedPrice = mrp - mrp * discountPercentage;
    return discountedPrice.toFixed(2).toString();
  }
}
