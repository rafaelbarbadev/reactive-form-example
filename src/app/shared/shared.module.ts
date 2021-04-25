import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { MockService } from './service/mock.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CancelHttpInterceptor } from './interceptors/CancelHttpInterceptor.interceptor';
import { HttpCancelService } from './service/http-cancel-service.service';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
  ],
  exports: [DropdownComponent],
  providers: [
    MockService,
    HttpCancelService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CancelHttpInterceptor,
      multi: true,
    }
  ]
})
export class SharedModule { }
