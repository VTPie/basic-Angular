import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentV2Component } from './countdown-parent-v2.component';

describe('CountdownParentV2Component', () => {
  let component: CountdownParentV2Component;
  let fixture: ComponentFixture<CountdownParentV2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownParentV2Component]
    });
    fixture = TestBed.createComponent(CountdownParentV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
