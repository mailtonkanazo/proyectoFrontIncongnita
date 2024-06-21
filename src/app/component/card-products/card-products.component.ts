import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css'
})
export class CardProductsComponent {
  @Input()titulo="";
  @Input()imagen="";
  @Input()precio="";
  @Input()producto:any={}

  private cartService=inject(CartService)
  addToCart(productTitulo:any){
   this.cartService.addToCart(productTitulo)
  }

}
