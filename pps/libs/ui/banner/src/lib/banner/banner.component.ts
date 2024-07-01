import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent {
  @Input() heading = '';
  @Input() content = '';
  @Input() type: 'main' | 'mid' | 'end' = 'mid';
}
