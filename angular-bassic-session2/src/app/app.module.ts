import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './directives/directives.component';
import { ConsumeServiceComponent } from './consume-service/consume-service.component';
import { GetTableService } from './consume-service/services/get-table.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    ConsumeServiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GetTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
