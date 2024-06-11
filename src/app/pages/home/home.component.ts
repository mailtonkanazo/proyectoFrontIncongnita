import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProductsComponent } from '../../component/card-products/card-products.component';
import { FooterComponent } from '../../component/footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProductsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
