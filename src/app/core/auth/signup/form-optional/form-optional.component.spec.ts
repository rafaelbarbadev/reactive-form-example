import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOptionalComponent } from './form-optional.component';

describe('FormOptionalComponent', () => {
  let component: FormOptionalComponent;
  let fixture: ComponentFixture<FormOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOptionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
