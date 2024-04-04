import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  PRODUCT_LIST = [
    {
      id: 1,
      name: 'Wall Primer',
      type: 'Interior',
      imgName: 'product_1.jpeg',
      packetSize: [
        { size: '1L', mrp: '219', discount: '30' },
        { size: '4L', mrp: '699', discount: '30' },
        { size: '10L', mrp: '1259', discount: '35' },
        { size: '20L', mrp: '2199', discount: '30' },
      ],
    },
    {
      id: 2,
      name: 'Wall Primer',
      type: 'Exterior',
      imgName: 'product_2.jpeg',
      packetSize: [
        { size: '1L', mrp: '419', discount: '30' },
        { size: '4L', mrp: '1299', discount: '30' },
        { size: '10L', mrp: '2459', discount: '35' },
        { size: '20L', mrp: '4299', discount: '30' },
      ],
    },
    {
      id: 3,
      name: 'Acrylic Washable Distemper',
      type: '',
      imgName: 'product_3.jpeg',
      packetSize: [
        { size: '1L', mrp: '119', discount: '30' },
        { size: '4L', mrp: '219', discount: '30' },
        { size: '10L', mrp: '359', discount: '35' },
        { size: '20L', mrp: '899', discount: '30' },
      ],
      pigmentPrice: '5',
    },
    {
      id: 4,
      name: 'Plastic Paint',
      type: 'Interior',
      imgName: 'product_4.jpeg',
      packetSize: [
        { size: '1L', mrp: '319', discount: '30' },
        { size: '4L', mrp: '999', discount: '30' },
        { size: '10L', mrp: '1859', discount: '35' },
        { size: '20L', mrp: '3199', discount: '30' },
      ],
      pigmentPrice: '5',
    },
    {
      id: 5,
      name: 'Plastic Paint',
      imgName: 'product_5.jpeg',
      type: 'Exterior',
      packetSize: [
        { size: '1L', mrp: '619', discount: '30' },
        { size: '4L', mrp: '1899', discount: '30' },
        { size: '10L', mrp: '3659', discount: '35' },
        { size: '20L', mrp: '6299', discount: '30' },
      ],
      pigmentPrice: '5',
    },
  ];

  constructor() {}

  fetchProduct(id: number): Observable<any> {
    const product = this.PRODUCT_LIST.find((obj) => {
      return obj.id === id;
    });
    return of(product);
  }
}
