import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-promo-banner',
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.scss',
})
export class PromoBannerComponent {
  readonly heading = input('');
  readonly content = input('');

  private readonly router = inject(Router);

  navigateContactPage() {
    this.router.navigate(['/contact']);
  }
}
