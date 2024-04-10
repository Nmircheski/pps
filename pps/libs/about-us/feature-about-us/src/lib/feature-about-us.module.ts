import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactBannerComponent } from '@pps/ui/contact-banner';
import { DetailsViewComponent } from '@pps/ui/details-view';
import { ExpandablePanelComponent } from '@pps/ui/expandable-panel';
import { PromoBannerComponent } from '@pps/ui/promo-banner';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { featureAboutUsRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureAboutUsRoutes),
    DetailsViewComponent,
    PromoBannerComponent,
    ContactBannerComponent,
    ExpandablePanelComponent,
  ],
  declarations: [AboutUsPageComponent],
})
export class FeatureAboutUsModule {}
