import { Component } from '@angular/core';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-item-description',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './item-description.component.html',
  styleUrl: './item-description.component.css'
})
export class ItemDescriptionComponent {

}
