import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { CircleProgressOptions, NgCircleProgressModule } from 'ng-circle-progress';
import { CourseComponent } from './course/course.component';
import { CustomDatePipe } from './common/pipes/custom-date.pipe';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import locale_es_pe from '@angular/common/locales/es-PE';
import { CustomCurrencyPipe } from './common/pipes/custom-currency.pipe';
import { TruncatePipe } from './common/pipes/truncate.pipe';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { OnlyNumberDirective } from './common/directives/only-number.directive';
registerLocaleData(locale_es_pe);

@NgModule({
  declarations: [
    AppComponent,
    CircleProgressComponent,
    CourseComponent,
    CustomDatePipe,
    CustomCurrencyPipe,
    TruncatePipe,
    OnlyNumberDirective,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule,
    NgbTooltipModule,
  ],
  providers: [
    CircleProgressOptions,
    DatePipe,
    CurrencyPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
