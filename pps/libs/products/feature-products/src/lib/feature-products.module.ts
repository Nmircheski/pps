import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@pps/ui/banner';
import { BenefitsModule } from '@pps/ui/benefits';
import { CardComponent } from '@pps/ui/card';
import { ContactBannerComponent } from '@pps/ui/contact-banner';
import { DetailsViewComponent } from '@pps/ui/details-view';
import { ExpandablePanelComponent } from '@pps/ui/expandable-panel';
import { PromoBannerComponent } from '@pps/ui/promo-banner';
import { featureHomeRoutes } from './lib.routes';
import { ProductsPageComponent } from './products-page/ProductsPage.component';

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
    BenefitsModule,
  ],
  declarations: [ProductsPageComponent],
})
export class FeatureProductsModule {}
