/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardFollowComponent } from './card-follow.component';

describe('CardFollowComponent', () => {
  let component: CardFollowComponent;
  let fixture: ComponentFixture<CardFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
