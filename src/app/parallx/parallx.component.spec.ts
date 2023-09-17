import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallxComponent } from './parallx.component';

describe('ParallxComponent', () => {
  let component: ParallxComponent;
  let fixture: ComponentFixture<ParallxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParallxComponent]
    });
    fixture = TestBed.createComponent(ParallxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
