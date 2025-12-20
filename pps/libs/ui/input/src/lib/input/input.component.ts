import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'pps-input',
    imports: [CommonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent {
  @Input() placeholder = 'Емаил Адреса';
}
