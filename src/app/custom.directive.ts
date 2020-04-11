import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  constructor(private elem: ElementRef) { 
    this.elem.nativeElement.style.textDecoration = 'underline';
  }
}
