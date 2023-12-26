import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureHomeRoutes } from './lib.routes';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureHomeRoutes)],
  declarations: [HomepageComponent],
})
export class FeatureHomeModule {}
