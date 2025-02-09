import { CdkAccordion, CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Renderer2,
  ViewEncapsulation,
  viewChild,
  input
} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@pps/ui/button';
import { MenuPopoverComponent } from '@pps/ui/menu-popover';

@Component({
    selector: 'pps-navbar',
    exportAs: 'ppsNavbar',
    imports: [
        CommonModule,
        ButtonComponent,
        MenuPopoverComponent,
        RouterModule,
        CdkAccordionModule,
    ],
    templateUrl: './Navbar.component.html',
    styleUrl: './Navbar.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
  navigateHome() {
    this.router.navigate([`home`]);
  }
  public menuOpen = false;
  protected isMobileScreen: boolean = false;

  readonly logoUrl = input<string>('');

  readonly popover = viewChild<MenuPopoverComponent>('popoverMenu');

  readonly menuMode = viewChild('hamburgerMenu', { read: ElementRef });

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
    // is mobile menu active

    if (!this.isMobileMenuActive()) {
      return;
    }

    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      //scrollbar dissapears - fill the missing space with margin
      const scrollBarWidth =
        window.innerWidth - document.body.clientWidth + 'px';

      this.renderer.setStyle(
        this.document.body,
        'margin-right',
        scrollBarWidth,
      );
    } else {
      this.renderer.removeStyle(this.document.body, 'margin-right');
    }
  }

  togglePopover(
    popover: MenuPopoverComponent | undefined,
    accordion: CdkAccordion | undefined,
  ): void {
    if (this.isMobileMenuActive()) {
      return;
    }
    this.popover()?.togglePopover();
  }

  protected popoverItemClicked(productType: string) {
    this.router.navigate([`products/${productType}`]);
  }

  private isMobileMenuActive(): boolean {
    // is mobile menu active
    const hamburgerMenu = this.menuMode()?.nativeElement;

    if (!hamburgerMenu) {
      return false;
    }

    const style = getComputedStyle(hamburgerMenu);

    if (style.display === 'none') {
      return false;
    }

    return true;
  }
}
