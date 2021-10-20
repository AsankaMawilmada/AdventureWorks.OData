/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableShimmerDirective } from './table-shimmer.directive';

describe('TableShimmerComponent', () => {
  let component: TableShimmerDirective;
  let fixture: ComponentFixture<TableShimmerDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableShimmerDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShimmerDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
