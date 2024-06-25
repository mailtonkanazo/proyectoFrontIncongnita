import { CurrencyPipe } from '@angular/common';
import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css',
})
export class CartProductsComponent {
  @Input() product: any;
private cartService= inject(CartService)
  productQuantity = new FormControl(0);

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.productQuantity.setValue(this.product.quantity);
    }
  }

  increment(productId: string) {
    this.cartService.incrementQuantity(productId);
  }

  decrement(productId: string) {
    this.cartService.decrementQuantity(productId);
  }

  deleteItem(productId: string) {
    this.cartService.deleteItem(productId)
  }
}
