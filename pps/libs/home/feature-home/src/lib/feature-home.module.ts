import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from '@pps/ui/banner';
import { CardComponent } from '@pps/ui/card';
import { HomepageComponent } from './homepage/homepage.component';
import { featureHomeRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    BannerComponent,
    CardComponent,
    RouterModule.forChild(featureHomeRoutes),
  ],
  declarations: [HomepageComponent],
})
export class FeatureHomeModule {}
