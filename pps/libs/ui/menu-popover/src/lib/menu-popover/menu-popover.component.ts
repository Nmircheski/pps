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
  isOpen = false;

  @Output() protected onItemClicked = new EventEmitter<void>();
}
