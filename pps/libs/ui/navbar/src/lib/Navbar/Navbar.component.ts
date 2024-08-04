import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';
import { MenuPopoverComponent } from '@pps/ui/menu-popover';

@Component({
  selector: 'pps-navbar',
  exportAs: 'ppsNavbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    MenuPopoverComponent,
    RouterModule,
    CdkAccordionModule,
  ],
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent {
  public menuOpen = false;

  @Input() logoUrl: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
  ) {}

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
    }
  }

  togglePopover(popover: MenuPopoverComponent | undefined) {
    console.log('togglePopover');
    popover?.togglePopover();
  }

  protected popoverItemClicked(productType: string) {
    this.router.navigate([`products/${productType}`]);
  }
}
