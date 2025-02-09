import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-public-menu',
  standalone: false,
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.css',
})
export class PublicMenuComponent {
  // public menuItems = [
  //   { label: 'Listado', icon: 'label', url: './' },
  //   { label: 'Productos', icon: 'add', url: './products' },
  //   { label: 'Iniciar Sesion', url: './auth' },
  // ];

  @Input() menuItemsRight: { label: string; icon?: string; url: string }[] = [];
  @Input() menuItemsLeft: { label: string; icon?: string; url: string }[] = [];
  @Input() showMainHtml: boolean = false; // Valor por defecto: false
}
