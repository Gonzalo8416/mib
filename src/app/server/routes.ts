import { provideServerRendering } from '@angular/platform-server';
import { aliens } from '../util/aliens.util';

// Proporcionar los servicios de prerenderizado
export const serverProviders = provideServerRendering();

// Definir la función de prerenderizado
export function getPrerenderParams(route: string) {
  if (route === '/alien/:name') {
    return aliens.map(alien => ({ name: alien.name }));
  }
  return null;
}