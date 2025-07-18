import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent }
];
