import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { featureContactRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featureContactRoutes)],
  declarations: [ContactPageComponent],
})
export class FeatureContactModule {}
