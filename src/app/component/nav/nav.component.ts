import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {RouterLinkWithHref } from '@angular/router';

import { CartService } from '../../service/cart.service';
import { CartProductsComponent } from '../cart-products/cart-products.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass, CartProductsComponent, RouterLinkWithHref, CurrencyPipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  private cartService= inject(CartService)
  cartProducts= this.cartService.products;
 
  showCart = signal(false);
  toggleShowCart() {
    this.showCart.update(value => !value)
  }
  menuVisible = false
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
