import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = signal(new Map());

  addToCart(product: any) {
    this.products.update((mapActual: any) => {
      const productInCart = mapActual.get(product._id);
      if (productInCart !== undefined) {
        // El producto ya existe
        mapActual.set(product._id, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      } else {
        // El producto no existe
        mapActual.set(product._id, { ...product, quantity: 1 });
      }
      console.log(mapActual);
      return new Map(mapActual);
    });
  }

  incrementQuantity(productId: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productId);
      if (productInCart !== undefined) {
        mapActual.set(productId, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      }

      return new Map(mapActual);
    });
  }

  decrementQuantity(productId: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productId);

      if (productInCart.quantity === 1) {
        mapActual.delete(productId);
      } else {
        mapActual.set(productId, {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        });
      }

      return new Map(mapActual);
    });
  }

  constructor() {}
}