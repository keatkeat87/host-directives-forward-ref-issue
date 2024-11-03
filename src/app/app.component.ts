import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import { ChildDirective } from './child.directive';

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
