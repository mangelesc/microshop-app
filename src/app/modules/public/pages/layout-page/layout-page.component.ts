import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  public menuItemsLeft = [
    { label: 'see all', url: './' },
    { label: 'electronics', url: './' },
    { label: 'jewelery', url: './' },
    { label: "men's clothing", url: './' },
    { label: "women's clothing", url: './' },
  ];

  public menuItemsRight = [
    { label: 'My Account', icon: 'user', url: '../auth/signin' },
    { label: 'My Cart', icon: '', url: '../auth/signup' },
    { label: 'Admin Panel', icon: '', url: '../admin' },
  ];
}
