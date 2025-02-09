import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface MenuNode {
  name: string;
  route: string;
  icon?: string;
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [
  {
    name: 'Products',
    route: 'string',
    icon: 'string',
    children: [
      { name: 'View products', route: '/admin/products/list' },
      { name: 'Edit products', route: '/admin/products/edit' },
      { name: 'Add new products', route: '/admin/products/add' },
    ],
  },
  {
    name: 'Users',
    route: 'string',
    icon: 'string',
    children: [
      { name: 'View users', route: '/admin/users/list' },
      { name: 'Edit users', route: '/admin/users/edit' },
      { name: 'Add new user', route: '/admin/users/add' },
    ],
  },
  {
    name: 'Shoppìng',
    route: 'string',
    icon: 'string',
    children: [
      { name: 'View carts', route: '/admin/users/cart' },
      { name: 'Edit carts', route: '/admin/users/cart' },
      { name: 'Add new cart', route: '/admin/users/cart' },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-admin-menu',
  standalone: false,
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMenuComponent {
  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
