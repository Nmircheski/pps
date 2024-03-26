import { Component, Input } from '@angular/core';
import { Icon } from '../models/models';

@Component({
  selector: 'pps-benefit-item',
  templateUrl: './benefit-item.component.html',
  styleUrl: './benefit-item.component.scss',
})
export class BenefitItemComponent {
  @Input() icon: Icon | undefined;

  protected readonly Icon = Icon;
}
