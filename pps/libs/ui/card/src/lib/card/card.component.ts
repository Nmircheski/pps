import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewEncapsulation,
  viewChild,
  input
} from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
    selector: 'pps-card',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  onButtonClick() {
    this.buttonClicked.emit();
  }
  public readonly titleIcon = input<'labels' | 'cups'>('labels');
  public readonly title = input('');
  /**
   * Background type
   */
  public readonly bgType = input<'labels' | 'cups' | 'light'>('labels');
  /**
   * Controls whether the paragph content is hidden on small screen
   * @default true
   */
  public readonly hideContentSm = input(true);
  /**
   * Controls whether  the show more button is hidden on small screen
   * @default false
   */
  public readonly hideLinkButtonSm = input(false);

  @Output() buttonClicked = new EventEmitter<void>();

  readonly templateRef = viewChild('templateRef', { read: TemplateRef });
}
