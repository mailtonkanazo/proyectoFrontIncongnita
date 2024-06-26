import { Component, Input, inject, signal } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ProductListService } from '../../service/product-list.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [NavComponent, FooterComponent, CurrencyPipe],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css',
})
export class ItemDescriptionComponent {
  private productService = inject(ProductListService);

  product = signal<any>({});
  @Input() id: String = '';

  ngOnInit() {
    console.warn('[ngOnInit] se ha inicializado el componente detail');
    this.productService.getProductsById(this.id).subscribe({
      next: (product) => {
        console.log(product);
        this.product.set(product);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
