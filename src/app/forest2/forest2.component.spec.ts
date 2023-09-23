import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forest2Component } from './forest2.component';

describe('Forest2Component', () => {
  let component: Forest2Component;
  let fixture: ComponentFixture<Forest2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Forest2Component]
    });
    fixture = TestBed.createComponent(Forest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
