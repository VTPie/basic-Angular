import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDrtComponent } from './attr-drt.component';

describe('AttrDrtComponent', () => {
  let component: AttrDrtComponent;
  let fixture: ComponentFixture<AttrDrtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttrDrtComponent]
    });
    fixture = TestBed.createComponent(AttrDrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
