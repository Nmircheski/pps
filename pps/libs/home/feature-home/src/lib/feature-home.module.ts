import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@pps/ui/banner';
import { CardComponent } from '@pps/ui/card';
import { DetailsViewComponent } from '@pps/ui/details-view';
import { ExpandablePanelComponent } from '@pps/ui/expandable-panel';
import { HomepageComponent } from './homepage/homepage.component';
import { featureHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
    BannerComponent,
    CardComponent,
    ExpandablePanelComponent,
    DetailsViewComponent,
  ],
  declarations: [HomepageComponent],
})
export class FeatureHomeModule {}
