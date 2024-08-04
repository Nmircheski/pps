import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pps-menu-popover',
  standalone: true,
  imports: [CommonModule, OverlayModule],
  templateUrl: './menu-popover.component.html',
  styleUrl: './menu-popover.component.scss',
})
export class MenuPopoverComponent {
  public isOpen = false;

  @Output() protected onItemClicked = new EventEmitter<string>();

  togglePopover() {
    this.isOpen = !this.isOpen;
  }
}
