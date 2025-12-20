import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';

@Component({
    selector: 'pps-promo-banner',
    imports: [CommonModule, ButtonComponent],
    templateUrl: './promo-banner.component.html',
    styleUrl: './promo-banner.component.scss'
})
export class PromoBannerComponent {
  readonly heading = input('');
  readonly content = input('');

  constructor(private readonly router: Router) {}

  navigateContactPage() {
    this.router.navigate(['/contact']);
  }
}
