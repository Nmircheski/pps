import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const featureHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
];
