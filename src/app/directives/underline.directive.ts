import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUnderline]',
  standalone: true
})
export class UnderlineDirective {
@Input() underlineColor: string='blue';
  constructor(private elementRef:ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.textDecoration = 'underline dotted';
    this.elementRef.nativeElement.style.textDecorationColor = this.underlineColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
    this.elementRef.nativeElement.style.textDecorationColor = 'none';
  }

}
