import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './auth/signup/signup.component';
import { FormComponent } from './auth/signup/form/form.component';
import { FormOptionalComponent } from './auth/signup/form-optional/form-optional.component';



@NgModule({
  declarations: [
    SignupComponent,
    FormComponent,
    FormOptionalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SignupComponent,
  ]
})
export class CoreModule { }
