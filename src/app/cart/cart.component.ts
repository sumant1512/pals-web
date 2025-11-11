import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from './cart.service';
import { SessionStorageService } from '../shared/services/session-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  userId: any;
  cartItems: any = [];
  constructor(
    private cartService: CartService,
    private sessionStorageService: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.sessionStorageService.getItem('userId');
    this.getCartItems();
  }

  getCartItems(): void {
    if (this.userId) {
      this.subscription.add(
        this.cartService
          .getCartItems(parseInt(this.userId))
          .subscribe((resp) => {
            this.cartItems = resp.data;
            console.log(this.cartItems);
          })
      );
    }
  }

  updateCartItemQuantity(cartItemId: number, quantity: number): void {
    this.subscription.add(
      this.cartService
        .updateCartItemQuantity(cartItemId, quantity)
        .subscribe((resp) => {
          if (resp) {
            this.getCartItems();
          }
        })
    );
  }

  emptyCart(): void {
    this.subscription.add(
      this.cartService.emptyCart(parseInt(this.userId)).subscribe((resp) => {
        if (resp) {
          this.getCartItems();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
