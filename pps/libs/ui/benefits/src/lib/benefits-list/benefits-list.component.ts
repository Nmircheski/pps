import { Component } from '@angular/core';
import { Icon } from '../models/models';

@Component({
    selector: 'pps-benefits-list',
    templateUrl: './benefits-list.component.html',
    styleUrl: './benefits-list.component.scss',
    standalone: false
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
