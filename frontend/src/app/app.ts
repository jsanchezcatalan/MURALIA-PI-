/**
 * Componente raíz de Angular (AppComponent).
 * Define la clase principal de la aplicación, su selector, la plantilla HTML
 * y los estilos asociados. Este componente se carga primero al iniciar la app.
 */

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('temp-app');
}
