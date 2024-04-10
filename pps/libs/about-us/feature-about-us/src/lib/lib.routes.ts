import { Route } from '@angular/router';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

export const featureAboutUsRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: AboutUsPageComponent },
];
