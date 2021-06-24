import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassWithParams]',
})
export class ClassWithParamsDirective {
  constructor(private element: ElementRef) { 
  }
  @Input()
    set bgColor(color: string){
      switch (color) {
        case 'r':
          this.element.nativeElement.style.backgroundColor = 'red';
          this.element.nativeElement.style.color = 'white';
          break;
        case 'y':
          this.element.nativeElement.style.backgroundColor = 'yellow';
          this.element.nativeElement.style.color = 'black';
          break;
        default:
          this.element.nativeElement.style.backgroundColor = 'black';
          this.element.nativeElement.style.color = 'white';
          break;
      }
    }
}
