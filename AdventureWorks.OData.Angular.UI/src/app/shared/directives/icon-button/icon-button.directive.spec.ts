/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconButtonDirective } from './icon-button.directive';

describe('IconButtonComponent', () => {
  let component: IconButtonDirective;
  let fixture: ComponentFixture<IconButtonDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconButtonDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
