import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ColorShades,
  getShadesFormHex,
  getThemeColorShades,
} from './shade.helper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  colorPallete = [
    '#E2DED6',
    '#4169E1',
    '#9C5506',
    '#ECE566',
    '#9C41BB',
    '#73AF00',
  ];
  colorFC = new FormControl<string>('#006BD8');
  shadeList: ColorShades[] = [];
  themeColors: any;

  productDetails = {
    name: 'Plastic Paint',
    type: 'Interior',
    packetSize: [
      { size: '1L', mrp: '319', discount: '30' },
      { size: '4L', mrp: '999', discount: '30' },
      { size: '10L', mrp: '1859', discount: '35' },
      { size: '20L', mrp: '3199', discount: '30' },
    ],
    redPrice: '5',
    greenPrice: '5',
    bluePrice: '5',
  };

  selectedPacket = this.productDetails.packetSize[0];
  selectedPacketList: Array<any> = [];

  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  ngOnInit(): void {
    this.createShade();
    this.shadeForm.valueChanges.subscribe((resp) => {
      console.log(resp);
    });
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

  selectPacket(selectedPacket: any): void {
    this.selectedPacket = selectedPacket;
  }

  getDiscountedPrice(selectedPacket: any): string {
    const mrp = parseFloat(selectedPacket.mrp);
    const discountPercentage = parseFloat(selectedPacket.discount) / 100;
    const discountedPrice = mrp - mrp * discountPercentage;
    return discountedPrice.toString();
  }

  createShade(): void {
    this.shadeList = getShadesFormHex(this.colorFC.value as string);
    this.themeColors = getThemeColorShades(this.shadeList);
  }
}
