import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
  input
} from '@angular/core';

@Component({
    selector: 'pps-button',
    imports: [CommonModule],
    templateUrl: './Button.component.html',
    styleUrl: './Button.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  /**
   * Background type
   */
  public readonly bgType = input<'blue' | 'light' | 'none'>('blue');

  public readonly iconPosition = input<'suffix' | 'prefix'>('suffix');

  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  onClicked() {
    this.onClick.emit();
  }
}
