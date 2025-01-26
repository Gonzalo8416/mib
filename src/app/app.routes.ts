import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AlienComponent } from './pages/alien/alien.component';
import { aliens } from './util/aliens.util';

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
  data: { renderMode: 'default' } // Cambia el modo de renderizado
 }
];

// Función para prerenderizar los valores de la ruta dinámica
export function getPrerenderParams(route: string): Record<string, string[]> | null {
    if (route === 'alien/:name') {
      return {
        name: aliens.map(alien => alien.name) // Extrae los nombres de los aliens
      };
    }
    return null;
  }
