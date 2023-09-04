import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingOneComponent } from './routing-one.component';

describe('RoutingOneComponent', () => {
  let component: RoutingOneComponent;
  let fixture: ComponentFixture<RoutingOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingOneComponent]
    });
    fixture = TestBed.createComponent(RoutingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
