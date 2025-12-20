
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';

@Component({
    selector: 'pps-contact-banner',
    imports: [ButtonComponent],
    templateUrl: './contact-banner.component.html',
    styleUrl: './contact-banner.component.scss'
})
export class ContactBannerComponent {
  readonly heading = input('');
  readonly content = input('');

  constructor(private readonly router: Router) {}

  navigateContactPage() {
    this.router.navigate(['/contact']);
  }
}
