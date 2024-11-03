import { Component } from '@angular/core';
import { ChildDirective } from './child.directive';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-parent />
    <p appChild>app works!</p>
  `,
  imports: [ParentComponent, ChildDirective],
})
export class AppComponent {}
