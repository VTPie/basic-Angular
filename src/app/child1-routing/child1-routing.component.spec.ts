import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1RoutingComponent } from './child1-routing.component';

describe('Child1RoutingComponent', () => {
  let component: Child1RoutingComponent;
  let fixture: ComponentFixture<Child1RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child1RoutingComponent]
    });
    fixture = TestBed.createComponent(Child1RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
