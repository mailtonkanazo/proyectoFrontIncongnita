import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
