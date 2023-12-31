import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowEncapsulationComponent } from './shadow-encapsulation.component';

describe('ShadowEncapsulationComponent', () => {
  let component: ShadowEncapsulationComponent;
  let fixture: ComponentFixture<ShadowEncapsulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShadowEncapsulationComponent]
    });
    fixture = TestBed.createComponent(ShadowEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
