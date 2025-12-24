import { Component, input } from '@angular/core';

import { FooterLink } from '../models/models';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'pps-footer-nav',
    imports: [RouterModule],
    templateUrl: './footer-nav.component.html',
    styleUrl: './footer-nav.component.scss'
})
export class FooterNavComponent {
  readonly title = input('');

  readonly links = input<FooterLink[]>([]);
}
