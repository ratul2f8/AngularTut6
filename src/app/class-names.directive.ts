import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClassNames]'
})
export class ClassNamesDirective {

  constructor(private element: ElementRef) { }

  @Input('appClasses')
  set classNames(classObject: any){
    for(let key in classObject){
      if(classObject[key]){
        this.element.nativeElement.classList.add(key);
      }else{
        this.element.nativeElement.classList.remove(key);
      }
    }
  }
}
