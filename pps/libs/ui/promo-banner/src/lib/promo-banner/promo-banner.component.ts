import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-promo-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.scss',
})
export class PromoBannerComponent {
  @Input() heading = '';
  @Input() content = '';
}
