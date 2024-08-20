import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  onButtonClick() {
    this.buttonClicked.emit();
  }
  @Input() public titleIcon: 'labels' | 'cups' = 'labels';
  @Input() public title = '';
  /**
   * Background type
   */
  @Input() public bgType: 'labels' | 'cups' | 'light' = 'labels';
  /**
   * Controls whether the paragph content is hidden on small screen
   * @default true
   */
  @Input() public hideContentSm = true;
  /**
   * Controls whether  the show more button is hidden on small screen
   * @default false
   */
  @Input() public hideLinkButtonSm = false;

  @Output() buttonClicked = new EventEmitter<void>();
}
