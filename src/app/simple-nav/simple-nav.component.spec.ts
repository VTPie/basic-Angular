import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNavComponent } from './simple-nav.component';

describe('SimpleNavComponent', () => {
  let component: SimpleNavComponent;
  let fixture: ComponentFixture<SimpleNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleNavComponent]
    });
    fixture = TestBed.createComponent(SimpleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
