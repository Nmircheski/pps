import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'pps-expandable-panel',
    imports: [CommonModule, CdkAccordionModule],
    templateUrl: './expandable-panel.component.html',
    styleUrl: './expandable-panel.component.scss'
})
export class ExpandablePanelComponent {
  items = [
    'храна и пијалоци',
    'фармацевстка индустрија',
    'хемиски средства и препарати',
    'услужна индустрија',
  ];
  expandedIndex = 0;
  @Input() logoUrl: string = '';
  @Input() subTitle: string = '';
  @Input() mainTitle: string = '';
}
