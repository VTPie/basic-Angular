import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDrtBiComponent } from './attr-drt-bi.component';

describe('AttrDrtBiComponent', () => {
  let component: AttrDrtBiComponent;
  let fixture: ComponentFixture<AttrDrtBiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttrDrtBiComponent]
    });
    fixture = TestBed.createComponent(AttrDrtBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
