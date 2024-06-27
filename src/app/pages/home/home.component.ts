import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CardProductsComponent } from '../../component/card-products/card-products.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { NavComponent } from '../../component/nav/nav.component';
import { ProductListService } from '../../service/product-list.service';
import { CartService } from '../../service/cart.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductsComponent, FooterComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private productList = inject(ProductListService);
  private cartService = inject(CartService);

  productCard = this.productList.getProducts;
  productService: any;
  
  products = signal<any>([]);

  ngOnInit() {
    console.warn('[ngOnInit] El componente Home ha sido inicializado');
    this.productList.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
        console.log(products);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
