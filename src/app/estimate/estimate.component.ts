import { Component } from '@angular/core';

export interface Product {
  description: string;
  size: string;
  rate: number;
  qty: number;
}

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
})
export class EstimateComponent {
  discountPercent: number = 0;
  grandTotal = 0;
  discountAmount = 0;
  products: Product[] = [
    {
      description: 'Sourya Cem White Lime Wash',
      size: '25 KG.',
      rate: 350,
      qty: 0,
    },
    {
      description: 'Sourya Cem Blue Lime Wash',
      size: '25 KG.',
      rate: 370,
      qty: 1,
    },
    { description: 'Pals Distemper Bag', size: '20 KG.', rate: 400, qty: 10 },
    { description: 'Pals Distemper Bag', size: '10 KG.', rate: 240, qty: 3 },
    { description: 'Pals Distemper Bag', size: '5 KG.', rate: 145, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '20 KG.', rate: 950, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '10 KG.', rate: 570, qty: 1 },
    { description: 'Pals Distemper Bucket', size: '5 KG.', rate: 345, qty: 1 },
    {
      description: 'Pals Wall Primer Interior',
      size: '20 LTR.',
      rate: 1650,
      qty: 10,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '10 LTR.',
      rate: 1000,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '4 LTR.',
      rate: 480,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Interior',
      size: '1 LTR.',
      rate: 170,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '20 LTR.',
      rate: 1940,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '10 LTR.',
      rate: 1150,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '4 LTR.',
      rate: 615,
      qty: 1,
    },
    {
      description: 'Pals Wall Primer Exterior',
      size: '1 LTR.',
      rate: 210,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '20 LTR.',
      rate: 2140,
      qty: 10,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '10 LTR.',
      rate: 1300,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '4 LTR.',
      rate: 645,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Interior',
      size: '1 LTR.',
      rate: 255,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '20 LTR.',
      rate: 2570,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '10 LTR.',
      rate: 1410,
      qty: 1,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '4 LTR.',
      rate: 695,
      qty: 2,
    },
    {
      description: 'Pals Plastic Paint Exterior',
      size: '1 LTR.',
      rate: 295,
      qty: 1,
    },
    {
      description: 'Pals Wall Putty (Powder)',
      size: '40 KG.',
      rate: 700,
      qty: 3,
    },
  ];

  getPackSizeNumeric(size: string): number {
    const num = parseFloat(size);
    return isNaN(num) ? 0 : num;
  }

  getWeight(product: Product): number {
    return this.getPackSizeNumeric(product.size) * product.qty;
  }

  getTotal(product: Product): number {
    return product.qty * product.rate;
  }

  getSubtotal(): number {
    return this.products.reduce((sum, p) => sum + this.getTotal(p), 0);
  }

  getDiscountAmount(): number {
    this.discountAmount = this.getSubtotal() * (this.discountPercent / 100);
    return this.discountAmount;
  }

  getGrandTotal(): void {
    this.grandTotal = this.getSubtotal() - this.getDiscountAmount();
  }

  ngOnInit() {
    this.getGrandTotal();
  }
}
