import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { MenuNode } from '../../../interfaces/MenuNode';

@Component({
  selector: 'app-admin-menu',
  standalone: false,
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMenuComponent implements OnInit {
  @Input() menuData: MenuNode[] = [];
  @Input() menuBarItems: MenuNode[] = [];

  ngOnInit() {
    // console.log('menuData:', this.menuData);
    // console.log('menuBarItems:', this.menuBarItems);
  }
}
