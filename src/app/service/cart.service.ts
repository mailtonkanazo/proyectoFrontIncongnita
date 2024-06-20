import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 products= signal(new Map());
}
