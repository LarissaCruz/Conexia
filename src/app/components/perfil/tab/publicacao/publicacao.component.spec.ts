/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PublicacaoComponent } from './publicacao.component';

describe('PublicacaoComponent', () => {
  let component: PublicacaoComponent;
  let fixture: ComponentFixture<PublicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
