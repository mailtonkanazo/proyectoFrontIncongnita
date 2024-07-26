import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get('http://3.19.57.90:3000/api/product');
  }

  getProductsById(id: String) {
    return this.http.get('http://3.19.57.90:3000/api/product/' + id);
  }
//   productList = signal([
//     {
//       imagen: 'https://picsum.photos/300/400?image=10',
//       titulo: 'Camisa Blanca Hombre M/L',
//       precio: '50.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=20',
//       titulo: 'Camisa Negra Hombre S',
//       precio: '45.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=30',
//       titulo: 'Camisa Azul Hombre L',
//       precio: '55.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=40',
//       titulo: 'Camisa Roja Hombre XL',
//       precio: '60.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=50',
//       titulo: 'Camisa Verde Hombre M',
//       precio: '52.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=60',
//       titulo: 'Camisa Amarilla Hombre S',
//       precio: '48.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=70',
//       titulo: 'Camisa Naranja Hombre L',
//       precio: '53.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=80',
//       titulo: 'Camisa Violeta Hombre XL',
//       precio: '58.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=90',
//       titulo: 'Camisa Rosa Hombre M',
//       precio: '47.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=100',
//       titulo: 'Camisa Marrón Hombre S',
//       precio: '49.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=110',
//       titulo: 'Camisa Gris Hombre L',
//       precio: '51.000'
//     },
//     {
//       imagen: 'https://picsum.photos/300/400?image=120',
//       titulo: 'Camisa Azul Claro Hombre XL',
//       precio: '59.000'
//     }
//   ]);
}