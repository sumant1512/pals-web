import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ACTIVE_BE } from 'src/app/shared/constants/config';
import { IProductRequestBody } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(body: IProductRequestBody): Observable<any> {
    const createProduct = `${ACTIVE_BE}/api/product/add`;
    return this.http.post<any>(createProduct, body).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }

  getAllProductDetails(): Observable<any> {
    const getProducts = `${ACTIVE_BE}/api/product/get-all-details`;
    return this.http.get<any>(getProducts).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }

  deleteProduct(productId: string): Observable<any> {
    const deleteProductApi = `${ACTIVE_BE}/api/product/delete/${productId}`;
    return this.http.delete<any>(deleteProductApi).pipe(
      map((response) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
