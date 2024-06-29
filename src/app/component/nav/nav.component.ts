import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

import { CartService } from '../../service/cart.service';
import { CartProductsComponent } from '../cart-products/cart-products.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgClass, CartProductsComponent, RouterLinkWithHref, CurrencyPipe, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  modeloMujer = false;
  modeloHombre = false;
  cajaMenuView = false;


cajaMenu() {
 this.cajaMenuView = !this.cajaMenuView;
}

closeModels() {
  this.modeloHombre = false
  this.modeloMujer = false
}
  toggleModeloMujer() {
    this.modeloMujer = !this.modeloMujer;
    this.modeloHombre = false
  }

  toggleModeloHombre() {
    this.modeloHombre = !this.modeloHombre;
    this.modeloMujer = false
  }
  private cartService = inject(CartService);
  cartProducts = this.cartService.products;
  total = this.cartService.total;
  showCart = signal(false);
  toggleShowCart() {
    this.showCart.update((value) => !value);
  }
  menuVisible = false;
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
