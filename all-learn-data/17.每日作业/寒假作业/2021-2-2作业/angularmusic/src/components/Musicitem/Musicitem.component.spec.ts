/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicitemComponent } from './Musicitem.component';

describe('MusicitemComponent', () => {
  let component: MusicitemComponent;
  let fixture: ComponentFixture<MusicitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
