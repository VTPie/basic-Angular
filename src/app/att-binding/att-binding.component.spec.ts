import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttBindingComponent } from './att-binding.component';

describe('AttBindingComponent', () => {
  let component: AttBindingComponent;
  let fixture: ComponentFixture<AttBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttBindingComponent]
    });
    fixture = TestBed.createComponent(AttBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
