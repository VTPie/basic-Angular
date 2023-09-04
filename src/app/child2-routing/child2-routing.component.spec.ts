import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2RoutingComponent } from './child2-routing.component';

describe('Child2RoutingComponent', () => {
  let component: Child2RoutingComponent;
  let fixture: ComponentFixture<Child2RoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child2RoutingComponent]
    });
    fixture = TestBed.createComponent(Child2RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
