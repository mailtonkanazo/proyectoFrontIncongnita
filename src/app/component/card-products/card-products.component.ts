import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-products',
  standalone: true,
  imports: [],
  templateUrl: './card-products.component.html',
  styleUrl: './card-products.component.css'
})
export class CardProductsComponent {
@Input() titulo = "";
@Input() imagen = "";
@Input() precio = "";
}
