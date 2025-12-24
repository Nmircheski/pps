import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@pps/feature-home').then((m) => m.featureHomeRoutes),
  },
  {
    path: 'products/:productsId',
    loadChildren: () =>
      import('@pps/feature-products').then((m) => m.featureHomeRoutes),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('@pps/feature-contact').then((m) => m.featureContactRoutes),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('@pps/feature-about-us').then((m) => m.featureAboutUsRoutes),
  },
];
