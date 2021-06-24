import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimesVariant2]'
})
export class TimesVariant2Directive {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('appTimesVariant2')
  set generateComponent(times: number){
    this.viewContainerRef.clear();
    for(let i = 0; i < times; i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef, {index: i});
    }
  }
}
