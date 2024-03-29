/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AudiComponent } from './audi.component';

describe('AudiComponent', () => {
  let component: AudiComponent;
  let fixture: ComponentFixture<AudiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
