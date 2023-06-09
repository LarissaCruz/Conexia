/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeguidoresComponent } from './seguidores.component';

describe('SeguidoresComponent', () => {
  let component: SeguidoresComponent;
  let fixture: ComponentFixture<SeguidoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguidoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
