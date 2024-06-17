import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardUserComponent } from '../../component/card-user/card-user.component';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardUserComponent, NavComponent, FooterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
