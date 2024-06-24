import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products = signal(new Map());
  total = computed(() => {
    let mapActual = this.products();
    let totalParcial = 0;

    for(let product of mapActual.values()) {
      totalParcial += product.price * product.quantity
    }

    return totalParcial
  })

  addToCart(product: any) {
    this.products.update((mapActual: any) => {
      const productInCart = mapActual.get(product.titulo);
      if (productInCart !== undefined) {
        // El producto ya existe
        mapActual.set(product.titulo, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      } else {
        // El producto no existe
        mapActual.set(product.titulo, { ...product, quantity: 1 });
      }
      console.log(mapActual);
      return new Map(mapActual);
    });
  }

  incrementQuantity(productTitulo: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productTitulo);
      if (productInCart !== undefined) {
        mapActual.set(productTitulo, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
      }

      return new Map(mapActual);
    });
  }

  decrementQuantity(productTitulo: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productTitulo);

      if (productInCart.quantity === 1) {
        mapActual.delete(productTitulo);
      } else {
        mapActual.set(productTitulo, {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        });
      }

      return new Map(mapActual);
    });
  }

  deleteItem(productTitulo: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productTitulo);
      if (productInCart !== undefined) {
        mapActual.delete(productTitulo);
      }

      return new Map(mapActual);
    });
  }

  constructor() {}
}
