import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BenefitItemComponent } from './benefit-item/benefit-item.component';
import { BenefitsListComponent } from './benefits-list/benefits-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BenefitsListComponent, BenefitItemComponent],
  exports: [BenefitsListComponent, BenefitItemComponent],
})
export class BenefitsModule {}
