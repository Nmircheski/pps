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
      import('@pps/feature-home').then((m) => m.FeatureHomeModule),
  },
];
