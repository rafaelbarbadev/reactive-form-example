import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgSelectModule,
  ],
  exports: [DropdownComponent]
})
export class SharedModule { }
