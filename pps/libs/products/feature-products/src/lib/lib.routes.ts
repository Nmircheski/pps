import { Route } from '@angular/router';
import { ProductsPageComponent } from './products-page/ProductsPage.component';

export const featureHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ProductsPageComponent },
];
