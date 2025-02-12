import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-counter-button-component',
  standalone: false,
  templateUrl: './counter-button-component.component.html',
  styleUrl: './counter-button-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterButtonComponentComponent {
  @Input() value: number = 1;
  @Output() valueChange = new EventEmitter<number>();

  increment() {
    if (this.value < 99) {
      this.value++;
      this.valueChange.emit(this.value);
    }
  }

  decrement() {
    if (this.value > 1) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }
}
