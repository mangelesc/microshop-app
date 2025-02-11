import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuNode } from '../../../../../interfaces/MenuNode';

@Component({
  selector: 'app-admin-menu-bar',
  standalone: false,
  templateUrl: './admin-menu-bar.component.html',
  styleUrl: './admin-menu-bar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminMenuBarComponent {
  @Input() menuBarItems: MenuNode[] = [];
}
