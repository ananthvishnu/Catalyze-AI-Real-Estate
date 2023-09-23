import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightgoastComponent } from './nightgoast.component';

describe('NightgoastComponent', () => {
  let component: NightgoastComponent;
  let fixture: ComponentFixture<NightgoastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NightgoastComponent]
    });
    fixture = TestBed.createComponent(NightgoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
