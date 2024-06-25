import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardAdminComponent } from '../../component/card-admin/card-admin.component';
import { NavComponent } from '../../component/nav/nav.component';
import { FooterComponent } from '../../component/footer/footer.component';



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CardAdminComponent, NavComponent, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
