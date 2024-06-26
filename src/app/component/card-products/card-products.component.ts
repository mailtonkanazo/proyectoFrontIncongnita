import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';

import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [ReactiveFormsModule,CurrencyPipe, RouterLinkWithHref],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css'
})
export class CardProductsComponent {
 
  @Input()producto:any={}

  private cartService=inject(CartService)
  addToCart(product:any){
   this.cartService.addToCart(product)
  }

}
