import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneEncapsulationComponent } from './none-encapsulation.component';

describe('NoneEncapsulationComponent', () => {
  let component: NoneEncapsulationComponent;
  let fixture: ComponentFixture<NoneEncapsulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoneEncapsulationComponent]
    });
    fixture = TestBed.createComponent(NoneEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
