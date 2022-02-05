import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <main>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </main>
`,
})
export class AppComponent {
  title = 'porth-test';
}
