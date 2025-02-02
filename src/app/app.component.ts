import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'microshop-app';

  public menuItemsLeft = [
    { label: 'Listado', icon: 'label', url: './' },
    { label: 'Productos', icon: 'add', url: './products' },
  ];

  public menuItemsRight = [
    { label: 'Iniciar Sesion', url: './auth/login' },
    { label: 'Crear Usuario', url: './auth/signup' },
  ];
}
