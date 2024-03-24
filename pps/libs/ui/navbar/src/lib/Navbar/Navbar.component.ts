import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';

@Component({
  selector: 'pps-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.scss',
})
export class NavbarComponent {
  @Input() logoUrl: string = '';
}
