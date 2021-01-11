import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-optional',
  templateUrl: './form-optional.component.html',
  styleUrls: ['./form-optional.component.scss']
})
export class FormOptionalComponent implements OnInit {

  @Input() parentForm: FormGroup;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form =  this.fb.group({
      emailme: [false]
    });
    this.parentForm.addControl('optional', this.form);
  }

}
