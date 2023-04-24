/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormContainerStep1Component } from './form-container-step1.component';

describe('FormContainerStep1Component', () => {
  let component: FormContainerStep1Component;
  let fixture: ComponentFixture<FormContainerStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContainerStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
