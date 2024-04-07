import { Route } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const featureContactRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ContactPageComponent },
];
