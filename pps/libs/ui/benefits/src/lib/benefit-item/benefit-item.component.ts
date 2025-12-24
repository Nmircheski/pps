import { Component, input } from '@angular/core';
import { Icon } from '../models/models';

@Component({
  selector: 'pps-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrl: './benefit-item.component.scss',
})
export class BenefitItemComponent {
  readonly icon = input<Icon>();

  protected readonly Icon = Icon;
}
