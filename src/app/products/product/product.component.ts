import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ColorShades,
  getShadesFormHex,
  getThemeColorShades,
} from './shade.helper';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IPacket, IProduct } from '../products.interface';
import { COLOIR_PALLETE } from '../products.const';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  colorPallete = COLOIR_PALLETE;
  colorFC = new FormControl<string>('#006BD8');
  shadeList: ColorShades[] = [];
  themeColors: any;

  productDetails!: IProduct;
  selectedPacket!: IPacket;
  selectedPacketList: Array<any> = [];

  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

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

  add(): void {
    this.selectedPacketList.push({
      ...this.selectedPacket,
      color: this.shadeForm.value.color || '#FFFFFF',
    });
  }

  selectColorPallete(color: string): void {
    this.colorFC.setValue(color);
    this.createShade();
  }

  selectPacket(selectedPacket: IPacket): void {
    this.selectedPacket = selectedPacket;
  }

  getDiscountedPrice(selectedPacket: any): string {
    const mrp = parseFloat(selectedPacket.mrp);
    const discountPercentage = parseFloat(selectedPacket.discount) / 100;
    const discountedPrice = mrp - mrp * discountPercentage;
    return discountedPrice.toFixed(2).toString();
  }

  createShade(): void {
    this.shadeList = getShadesFormHex(this.colorFC.value as string);
    this.themeColors = getThemeColorShades(this.shadeList);
  }
}
