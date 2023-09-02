import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //ElementRef: cấp quyền truy cập trực tiếp vào phần tử host DOM, thông qua thuộc tính NativeElement của nó.
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
