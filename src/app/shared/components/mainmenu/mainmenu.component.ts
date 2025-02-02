import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainmenu',
  standalone: false,
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css',
})
export class MainmenuComponent {
  // public menuItems = [
  //   { label: 'Listado', icon: 'label', url: './' },
  //   { label: 'Productos', icon: 'add', url: './products' },
  //   { label: 'Iniciar Sesion', url: './auth' },
  // ];

  @Input() menuItemsRight: { label: string; icon?: string; url: string }[] = [];
  @Input() menuItemsLeft: { label: string; icon?: string; url: string }[] = [];
}
