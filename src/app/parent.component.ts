import { Component, forwardRef } from '@angular/core';
import { ChildDirective } from './child.directive';

@Component({
  selector: 'app-parent',
  template: `<p>parent works!</p>`,
  standalone: true,
  hostDirectives: [forwardRef(() => ChildDirective)]
})
export class ParentComponent {

}
