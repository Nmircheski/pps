import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.scss',
})
export class NavbarComponent {
  @Input() logoUrl: string = '';
}
