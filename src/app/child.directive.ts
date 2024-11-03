import { Directive, inject } from '@angular/core';
import { ParentComponent } from './parent.component';

@Directive({
  selector: '[appChild]',
  standalone: true
})
export class ChildDirective {
  constructor() { 
    console.log(inject(ParentComponent, { optional: true, self: true }));
  }
}
