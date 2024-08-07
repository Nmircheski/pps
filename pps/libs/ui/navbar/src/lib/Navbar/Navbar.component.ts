import { CdkAccordion, CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  Input,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  navigateHome() {
    this.router.navigate([`home`]);
  }
  public menuOpen = false;
  protected isMobileScreen: boolean = false;

  @Input() logoUrl: string = '';

  @ViewChild('popoverMenu') popover: MenuPopoverComponent | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobileScreen = result.matches;
        console.log('isMobile:', this.isMobileScreen);
      });
  }

  protected toggleMenu(): void {
    if (!this.isMobileScreen) {
      return;
    }

    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.renderer.addClass(this.document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(this.document.body, 'overflow-hidden');
    }
  }

  togglePopover(
    popover: MenuPopoverComponent | undefined,
    accordion: CdkAccordion | undefined,
  ) {
    this.popover?.togglePopover();
  }

  protected popoverItemClicked(productType: string) {
    this.router.navigate([`products/${productType}`]);
  }
}
