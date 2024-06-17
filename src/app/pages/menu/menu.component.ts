import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../../component/nav/nav.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  modeloMujer = false;
  modeloHombre = false;

  mostrarMujer() {
    this.modeloMujer = true;
    this.modeloHombre = false;
  }

  mostrarHombre() {
    this.modeloMujer = false;
    this.modeloHombre = true;
  }
}
