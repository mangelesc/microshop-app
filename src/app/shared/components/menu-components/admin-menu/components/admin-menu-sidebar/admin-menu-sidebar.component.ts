import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuNode } from '../../../../../interfaces/MenuNode';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  link: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-admin-menu-sidebar',
  standalone: false,
  templateUrl: './admin-menu-sidebar.component.html',
  styleUrl: './admin-menu-sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMenuSidebarComponent {
  @Input() menuData: MenuNode[] = [];

  private _transformer = (node: MenuNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link || '',
      icon: node.icon || '',
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

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.menuData; // ✅ Se asigna una vez al iniciar
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
