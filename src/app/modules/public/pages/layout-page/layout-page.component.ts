import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  public menuItemsLeft = [
    { label: 'electronics', icon: 'label', url: './' },
    { label: 'jewelery', icon: 'label', url: './' },
    { label: "men's clothing", icon: 'label', url: './' },
    { label: "women's clothing", icon: 'label', url: './' },
  ];

  public menuItemsRight = [
    { label: 'My Account', icon: 'user', url: '../auth/signin' },
    { label: 'My Cart', icon: '', url: '../auth/signup' },
  ];
}
