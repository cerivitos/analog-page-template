import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  styles: [
    `
      :host {
        @apply w-full p-4 lg:px-0 lg:w-2/3 mx-auto;
      }
    `,
  ],
})
export class AppComponent {}
