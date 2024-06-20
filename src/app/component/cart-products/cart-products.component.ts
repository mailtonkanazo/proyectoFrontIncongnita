import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.css',
})
export class CartProductsComponent {
  @Input() product: any;
}
