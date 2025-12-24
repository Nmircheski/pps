
import { Component, ViewEncapsulation, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';

@Component({
    selector: 'pps-banner',
    imports: [ButtonComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class BannerComponent {
  readonly heading = input('');
  readonly content = input('');
  readonly type = input<'main' | 'mid' | 'end'>('mid');

  constructor(private readonly router: Router) {}

  navigateContactPage() {
    this.router.navigate(['/contact']);
  }
}
