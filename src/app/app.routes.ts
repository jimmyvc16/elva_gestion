import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'vacaciones',
    loadComponent: () => import('./vacation-request/vacation-request.page').then((m) => m.VacationRequestPage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
