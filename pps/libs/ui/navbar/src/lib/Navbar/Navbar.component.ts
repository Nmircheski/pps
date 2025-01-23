import { CdkAccordion, CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
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

  @ViewChild('hamburgerMenu', { read: ElementRef }) menuMode:
    | ElementRef<HTMLDivElement>
    | undefined;

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
    const hamburgerMenu = this.menuMode?.nativeElement;

    if (!hamburgerMenu) {
      return;
    }

    const style = getComputedStyle(hamburgerMenu);

    if (style.display === 'none') {
      return;
    }

    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
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
  ) {
    this.popover?.togglePopover();
  }

  protected popoverItemClicked(productType: string) {
    this.router.navigate([`products/${productType}`]);
  }
}
