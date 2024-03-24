import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@pps/ui/banner';
import { CardComponent } from '@pps/ui/card';
import { ContactBannerComponent } from '@pps/ui/contact-banner';
import { DetailsViewComponent } from '@pps/ui/details-view';
import { ExpandablePanelComponent } from '@pps/ui/expandable-panel';
import { PromoBannerComponent } from '@pps/ui/promo-banner';
import { HomepageComponent } from './homepage/homepage.component';
import { featureHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
    BannerComponent,
    PromoBannerComponent,
    ContactBannerComponent,
    CardComponent,
    ExpandablePanelComponent,
    DetailsViewComponent,
  ],
  declarations: [HomepageComponent],
})
export class FeatureHomeModule {}
