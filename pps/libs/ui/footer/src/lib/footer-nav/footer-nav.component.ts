import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLink } from '../models/models';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'pps-footer-nav',
    imports: [CommonModule, RouterModule],
    templateUrl: './footer-nav.component.html',
    styleUrl: './footer-nav.component.scss'
})
export class FooterNavComponent {
  @Input() title = '';

  @Input() links: FooterLink[] = [];
}
