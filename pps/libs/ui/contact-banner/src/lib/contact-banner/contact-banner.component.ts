import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-contact-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './contact-banner.component.html',
  styleUrl: './contact-banner.component.scss',
})
export class ContactBannerComponent {
  @Input() heading = '';
  @Input() content = '';
}
