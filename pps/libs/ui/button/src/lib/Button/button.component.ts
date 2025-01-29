import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pps-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Button.component.html',
  styleUrl: './Button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  /**
   * Background type
   */
  @Input() public bgType: 'blue' | 'light' | 'none' = 'blue';

  @Input() public iconPosition: 'suffix' | 'prefix' = 'suffix';

  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  onClicked() {
    this.onClick.emit();
  }
}
