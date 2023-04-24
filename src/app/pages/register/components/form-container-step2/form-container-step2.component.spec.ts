/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormContainerStep2Component } from './form-container-step2.component';

describe('FormContainerStep2Component', () => {
  let component: FormContainerStep2Component;
  let fixture: ComponentFixture<FormContainerStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContainerStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
