import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingTwoComponent } from './routing-two.component';

describe('RoutingTwoComponent', () => {
  let component: RoutingTwoComponent;
  let fixture: ComponentFixture<RoutingTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingTwoComponent]
    });
    fixture = TestBed.createComponent(RoutingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
