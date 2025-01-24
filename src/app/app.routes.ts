import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AlienComponent } from './pages/alien/alien.component';

export const routes: Routes = [
 {
  path:'',
  component: LoginComponent,
  // redirectTo: '/login',
  // pathMatch: 'full',
 },
 {
  path:'home',
  component: HomeComponent,
 },
 {
  path:'intro',
  component: IntroComponent,
 },
 {
  path:'profile',
  component: ProfileComponent,
 },{
  path:'logout',
  component: LogoutComponent,
 },
 {
  path: 'alien/:name',
  component: AlienComponent,
 }
];
