import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable, computed, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private http = inject(HttpClient);
  products = signal(new Map());
  total = computed(() => {
    let mapActual = this.products();
    let totalParcial = 0;

    for (let product of mapActual.values()) {
      totalParcial += product.price * product.quantity;
    }

    return totalParcial;
  });

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

  deleteItem(productId: string) {
    this.products.update((mapActual) => {
      const productInCart = mapActual.get(productId);
      if (productInCart !== undefined) {
        mapActual.delete(productId);
      }

      return new Map(mapActual);
    });
  }

  checkout(formData: any) {

    const mapToArray = Array.from(this.products().values())
    const newArrayOfProducts = mapToArray.map(function(products){
      return {
        productDetail: products._id, quantity: products.quantity
      }
    })

    const body = {
      token: localStorage.getItem("TOKEN"),
      products: newArrayOfProducts,
      total: this.total(),
      name: formData.name,
      contactNumber: formData.contactNumber,
      address: formData.address,
      complement: formData.complement,
      paymentMethod: formData.paymentMethod
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("TOKEN")}`,
      'Content-Type': 'application/json'
  })
    return this.http.post("http://3.19.57.90:3000/api/orders", body, {headers: headers})
  }
  constructor() {}
}
