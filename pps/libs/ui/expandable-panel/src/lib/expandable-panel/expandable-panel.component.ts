import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'pps-expandable-panel',
  imports: [CommonModule, CdkAccordionModule, NgOptimizedImage],
  templateUrl: './expandable-panel.component.html',
  styleUrl: './expandable-panel.component.scss',
})
export class ExpandablePanelComponent {
  items = signal([
    'храна и пијалоци',
    'фармацевстка индустрија',
    'хемиски средства и препарати',
    'услужна индустрија',
  ]);
  expandedIndex = 0;
  readonly logoUrl = input<string>('');
  readonly subTitle = input<string>('');
  readonly mainTitle = input<string>('');
}
