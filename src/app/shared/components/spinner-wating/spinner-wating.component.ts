import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spinner-wating',
  standalone: false,
  templateUrl: './spinner-wating.component.html',
  styleUrl: './spinner-wating.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerWatingComponent {}
