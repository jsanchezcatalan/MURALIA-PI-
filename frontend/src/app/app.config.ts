/**
 * Este archivo contiene la configuración global de la aplicación Angular.
 * Aquí se definen proveedores, servicios, interceptores HTTP y cualquier
 * configuración inicial que deba aplicarse antes de que arranque la app.
 */

import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
