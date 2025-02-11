import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MenuNode } from '../../../../shared/interfaces/MenuNode';

@Component({
  selector: 'app-layout-page',
  standalone: false,
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  TREE_DATA: MenuNode[] = [
    {
      name: 'Products',
      icon: 'string',
      children: [
        { name: 'View products', link: '/admin/products/add-product' },
        { name: 'Edit products', link: '/admin/products/add-product' },
        { name: 'Add new products', link: '/admin/products/add-product' },
      ],
    },
    {
      name: 'Users',
      icon: 'string',
      children: [
        { name: 'View users', link: '' },
        { name: 'Edit users', link: '' },
        { name: 'Add new user', link: '' },
      ],
    },
    {
      name: 'Shoppìng',
      icon: 'string',
      children: [
        { name: 'View carts', link: '' },
        { name: 'Edit carts', link: '' },
        { name: 'Add new cart', link: '' },
      ],
    },
  ];

  menuBarItems: MenuNode[] = [
    {
      name: 'Settings',
      icon: 'settings',
      // link: '/settings',
      children: [],
    },
    {
      name: 'Log Out',
      icon: 'person',
      // link: '/',
      // children: [
      //   { name: 'View users', icon: 'visibility', link: '/users/view' },
      //   { name: 'Edit users', icon: 'edit', link: '/users/edit' },
      //   { name: 'Add new user', icon: 'add', link: '/users/add' },
      // ],
    },
  ];
}
