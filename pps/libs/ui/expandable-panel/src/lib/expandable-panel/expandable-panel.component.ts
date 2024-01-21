import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'pps-expandable-panel',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.scss',
})
export class ExpandablePanelComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  logoUrl: string = '';
}
