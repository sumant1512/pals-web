import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
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
  shadeList = [
    {
      colorCode: '8108',
      colorName: 'Pink',
      hexCode: 'rgb(100%, 75.3%, 79.6%)',
    },
    {
      colorCode: '5182',
      colorName: 'Lucid Dream',
      hexCode: '#E7D3D3',
    },
    {
      colorCode: '9607',
      colorName: 'Purple Galaxy-N',
      hexCode: 'rgb(101, 71, 99)',
    },
  ];
  shadeForm = new FormGroup({
    color: new FormControl(''),
  });

  ngOnInit(): void {
    this.shadeForm.valueChanges.subscribe((resp) => {
      console.log(resp);
    });
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
}
