import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { ClassWithParamsDirective } from './class-with-params.directive';
import { ClassNamesDirective } from './class-names.directive';
import { TimesDirective } from './times.directive';
import { TimesVariant2Directive } from './times-variant2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    ClassWithParamsDirective,
    ClassNamesDirective,
    TimesDirective,
    TimesVariant2Directive,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
