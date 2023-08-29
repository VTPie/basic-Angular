import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProjectedComponent } from './item-projected.component';

describe('ItemProjectedComponent', () => {
  let component: ItemProjectedComponent;
  let fixture: ComponentFixture<ItemProjectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemProjectedComponent]
    });
    fixture = TestBed.createComponent(ItemProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
