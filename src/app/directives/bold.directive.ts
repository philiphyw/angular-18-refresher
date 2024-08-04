import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBold]',
  standalone: true
})
export class BoldDirective {

  constructor(private elementRef:ElementRef) {
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.fontWeight = 'inherit';
  }

}
