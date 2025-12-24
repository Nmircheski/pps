import { Component } from '@angular/core';
import { BenefitItemComponent } from '../benefit-item/benefit-item.component';
import { Icon } from '../models/models';

@Component({
  selector: 'pps-benefits-list',
  imports: [BenefitItemComponent],
  templateUrl: './benefits-list.component.html',
  styleUrl: './benefits-list.component.scss',
})
export class BenefitsListComponent {
  protected readonly benefitsList: {
    icon: Icon;
  }[] = [
    {
      icon: Icon.Snowflake,
    },
    {
      icon: Icon.Sun,
    },
    {
      icon: Icon.Thermometer,
    },
    {
      icon: Icon.DoubleCircle,
    },
    {
      icon: Icon.Snowing,
    },
  ];
}
