import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  updateCartItemQuantity(cartItemId: number, quantity: number) {
    return this.http.put(
      `http://localhost:8080/cart/update-cart-item/${cartItemId}`,
      { quantity: quantity }
    );
  }

  emptyCart(userId: number) {
    return this.http.delete(`http://localhost:8080/cart/${userId}`);
  }

  getCartItems(userId: number): Observable<any> {
    return this.http.get(`http://localhost:8080/cart/my-cart/${userId}`);
  }

  addItemsToCart(body: any): Observable<any> {
    return this.http.post(`http://localhost:8080/cart/add`, body);
  }
}
