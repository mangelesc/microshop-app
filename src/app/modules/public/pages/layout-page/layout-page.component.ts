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
    { label: "men's clothing", url: './mens-clothing' },
    { label: "women's clothing", url: './womens-clothing' },
    { label: 'jewelery', url: './jewelery' },
    { label: 'electronics', url: './electronics' },
  ];

  public menuItemsRight = [
    { label: 'My Account', icon: 'user', url: '../auth/signin' },
    { label: 'My Cart', icon: '', url: '../auth/signup' },
    { label: 'Admin Panel', icon: '', url: '../admin' },
  ];
}
