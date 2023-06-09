/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeguindoComponent } from './seguindo.component';

describe('SeguindoComponent', () => {
  let component: SeguindoComponent;
  let fixture: ComponentFixture<SeguindoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguindoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
