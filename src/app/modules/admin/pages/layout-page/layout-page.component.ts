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
        { name: 'View products', link: '/admin/products/view-products' },
        { name: 'View categories', link: '/admin/products/view-categories' },

        { name: 'Edit products', link: '/admin/products/edit-products' },
        { name: 'Add new products', link: '/admin/products/add-products' },
      ],
    },
    {
      name: 'Users',
      icon: 'string',
      children: [
        { name: 'View users', link: '/admin/users/view-users' },
        { name: 'Edit users', link: '/admin/users/edit-users' },
        { name: 'Add new user', link: '/admin/users/add-users' },
      ],
    },
    {
      name: 'Shoppìng',
      icon: 'string',
      children: [
        { name: 'View carts', link: '/admin/shopping/view-shopping' },
        { name: 'Edit carts', link: '/admin/shopping/edit-shopping' },
        { name: 'Add new cart', link: '/admin/shopping/add-shopping' },
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
      name: 'FrontEnd',
      icon: 'web',
      link: '/',
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
