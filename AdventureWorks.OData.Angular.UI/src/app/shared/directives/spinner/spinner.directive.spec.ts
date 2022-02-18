/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpinnerDirective } from './spinner.directive';

describe('SpinnerComponent', () => {
  let component: SpinnerDirective;
  let fixture: ComponentFixture<SpinnerDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
