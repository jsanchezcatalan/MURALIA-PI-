/**
 * Punto de entrada principal de la aplicación Angular.
 * Aquí se arranca la app ejecutando bootstrapApplication(AppComponent).
 * Este archivo es el primero que se ejecuta cuando Angular carga en el navegador.
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
