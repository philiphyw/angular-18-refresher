import { Directive } from '@angular/core';
import { BoldDirective } from './bold.directive';
import { UnderlineDirective } from './underline.directive';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  hostDirectives:[
    BoldDirective,
    {directive: UnderlineDirective, inputs: ['underlineColor']}
  ]
})
export class HighlightDirective {

  constructor() { }

}
