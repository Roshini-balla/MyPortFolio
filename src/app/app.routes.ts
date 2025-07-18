import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home';
import { AboutComponent } from './component/about/about';
import { SkillsComponent } from './component/skills/skills';
import { ProjectsComponent } from './component/projects/projects';
import { ContactComponent } from './component/contact/contact';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // default route
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
